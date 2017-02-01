#!/usr/local/bin/node
var JiraApi = require('jira').JiraApi;

var argv = require('yargs').argv;

var readline = require('readline');

var clc = require('cli-color');

var fs = require('fs');

var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

var jira;

var jiraConfig = './.jira-config';
var jiraCache = '.jira-cache';

var config = {
    host: "jira.f-road.com.cn",
    port: 8080
};

// console.log(argv)
// 配置参数
var user = argv.u || argv.user;

var password = argv.p || argv.password;

var login = argv.l || argv.login;

var assignee = argv.assignee || argv.o || argv.other;

var issuetype = argv.issuetype;

var status = argv.status;

var cached = argv.cache;

var help = argv.h || argv.help;

var del = argv.d || argv.delete;

var interact = argv.i || argv.interact;

var stat = argv.stat;

var project = argv.project || 'MALL';
var version = argv.version || '1.4.0';
// 缓存
var issueList = {};

var msg = clc.xterm(202);

process.stdout.write(clc.reset);

// console.log(argv)
main();

function main () {
    // 帮助模式
    if (help) {
        console.log('Name: \n');
        console.log('    jira - a shell for manage jira project.\n')
        console.log('SYNOPSIS: \n');
        console.log('    npm run jira -- [--user| -u] [--password | -p] [--login | -l] \n'
                  + '                    [--assignee | --other | -o] [--interact | -i]\n'
                  + '                    [--issuetype] [--status] [--cache] [--help]\n')
        return;
    }
    else {
        getUserInfo();
    }
}


// project = MALL AND issuetype = Bug AND resolution = Unresolved AND assignee in (membersOf(jira-users), membersOf(jira-developers)) ORDER BY updatedDate DESC

function jiraMethod () {
    jira.getUsersIssues = function(username, callback,  opt) {
        if (username.indexOf("@") > -1) {
            username = username.replace("@", '\\u0040');
        }

        if (!stat) {
            var jql = "assignee in (" + username + ")";
            var openText = ' AND status in (Open, "In Progress", Reopened)';
            if (opt && opt.status) {
                jql += ' AND status = ' + status + ' '
            }
            else {
                jql += ' AND status in (Open, "In Progress", Reopened)';
            }

            if (opt && opt.issuetype) {
                jql += ' AND issuetype = ' + issuetype + ' '
            }
        }

        this.searchJira(jql, (opt && opt.fields) || ['summary'], callback);

    };
}


function deleteIssue (issueId) {
    jira.deleteIssue(issueId, function (error) {
        if (!error) {
            console.log('Delete Issue ' + issueId + ' Successfully.')
            return;
        }
        else {
            console.log(error);
        }
    })
}

function promtConfig () {

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> '
    });

    console.log('Please Input Your JIRA Username: \n');
    rl.prompt();

    rl.on('line', function (line)  {

        if (!user) {
            user = line;
            console.log('Please Input Your JIRA Password: \n');
            rl.prompt();
        }
        else {
            password = line;
            rl.emit('close');
        }


    }).on('close', function () {
        loginJIRA();
    });

}

function getUserInfo () {

    if ((!user || !password) || login) {


        // 读取配置文件
        if (login) {
            console.log('Interactive Login')
            promtConfig();
        } else if (!user || !password) {

            try {
                var stat = fs.statSync(jiraConfig)

                var _config = JSON.parse(fs.readFileSync(jiraConfig, 'utf-8'));

                user = _config.user;
                password = _config.password;

                loginJIRA();
            }
            catch(err) {
                // console.log(err)
                promtConfig();
            }

        }
    }
}

function loginJIRA () {

    if (user) {
        console.log('Hi, ' + msg(user) + '!');

    } else {
        console.log('Error: Please Input Your JIRA Username.');
        return;
    }

    if (!password) {
        console.log('Error: Please Input Your JIRA Password.');
        return;
    }

    config.user = user;
    config.password = password;

    fs.writeFileSync(jiraConfig, JSON.stringify(config));

    jira = new JiraApi('http', config.host, config.port, config.user, config.password, '2');

    jiraMethod();
    // Start to Operate with JIRA
    operate();
}

function operate () {
    if (del) {
        deleteIssue(del);
        return;
    }
    else if (interact) {
        startShell();
    }

    else if (stat) {
        getStat(startShell);
    }
    else {
        getUsersIssues(startShell)
    }
}

function getStat (callback) {

    console.log('Getting Stats ... \n');

    var page = 50;
    var jql = 'project =' + project + (version ? ' AND fixversion = ' + version : '');
    jira.searchJira(jql, {fields: ['summary', 'assignee', 'issuetype'],
            startAt: 50}, function(error, issue) {
        if (!error) {
            var total = issue.total;
            console.log('Total Task: '+ msg(issue.total))

            var t = 0;

            var opt = {
                bugNum: 0,
                taskNum: 0,
                subTaskNum: 0,
                otherNum: 0
            };
            var assignee = {};
            for (var i = 0; i < issue.total; i = i + page) {
                jira.searchJira(jql, {fields: ['summary', 'assignee', 'issuetype'], startAt: i},
                    function(error, issue) {
                    if (!error) {
                        t += issue.issues.length;
                        issue.issues.forEach(function (value, key) {
                            if (!value.fields.assignee) {
                                value.fields.assignee = {
                                    name: 'Unassigned'
                                };
                            }
                            var name = value.fields.assignee.displayName;

                            if (value.fields.issuetype.name === 'Bug') {
                                opt.bugNum++
                                assignee[name] ? assignee[name].bug++ : assignee[name] = { bug: 1, task: 0 };
                            }
                            else if (value.fields.issuetype.name === 'Task') {
                                opt.taskNum++;
                                assignee[name] ? assignee[name].task++ : assignee[name] = { task: 1, bug: 0  };
                            }
                            else if (value.fields.issuetype.name === 'Sub-task') {
                                opt.subTaskNum++;
                                assignee[name] ? assignee[name].task++ : assignee[name] = { task: 1, bug: 0  };
                            }
                            else {
                                opt.otherNum++;
                                assignee[name] ? assignee[name].task++ : assignee[name] = { task: 1 , bug: 0 };
                            }
                        });
                        if (total === t) {
                            eventEmitter.emit('stat', opt, assignee)
                        }
                    }
                });
            }
        }
    });
}

eventEmitter.on('stat', function (opt, assignee) {
    console.log('-------------------------------------')
    console.log('Bug Total: ' + msg(opt.bugNum));
    console.log('Task Total: ' + msg(opt.taskNum));
    console.log('Sub-Task Total: ' + msg(opt.subTaskNum));
    console.log('Other Total: ' + msg(opt.otherNum));
    console.log('-------------------------------------')

    var assign = [];

    var tab = [15, 15, 15];
    console.log(msg('NAME           TASK           BUG'));
    console.log('-----------------------------------');


    for (name in assignee) {
        var person = assignee[name];
        var p = {
            name: name,
            task: person.task ? person.task : 0,
            bug: person.bug ? person.bug : 0
        };
        var space1 = '';
        var space2 = '';
        for(var i = 0; i < tab[0] - p.name.replace(/[^\x00-\xff]/g, '01').length; i++) {
            space1 += ' ';
        }
        for(var i = 0; i < tab[1] - p.task.toString().length; i++) {
            space2 += ' ';
        }
        console.log(p.name + space1 + p.task + space2 + p.bug);
    }
})

function getUsersIssues (callback) {

    console.log('Getting Your JIRA Issue List ... \n');
    var Issues = [];

    if (cached) {
        fs.stat(jiraCache, function (error) {
            if (!error) {
                var info = fs.readFileSync(jiraCache, 'utf-8');
                console.log(info);
                issues = info.split('\n').filter(function (value) {
                    return !!value;
                });
                issues.forEach(function (value) {
                    var id = value.split('[')[0];
                    var type = value.split(']')[0].split('[')[1];
                    issueList[id] = {
                        id: id,
                        type: type
                    };
                });
                callback();
            }
            else {
                console.log('No .jira-cache File Can be Found. Remove --cache Option')
            }
        });

    }
    else {
        jira.getUsersIssues(assignee || config.user, function(error, issue) {

            if (error) {
                console.error(error);
            }
            else {
                var info = '';
                issues = issue.issues;
                console.log('Number of Issues : ' + msg(issue.total));
                issues.forEach(function (value, key) {
                    var type = value.fields.issuetype.name;
                    issueList[value.key] = {
                        id: value.key,
                        type: type
                    };
                    console.log(value.key + '[' + type + ']: ' + value.fields.summary);
                    info += value.key + '[' + type + ']: ' + value.fields.summary + '\n';
                });
                fs.writeFileSync(jiraCache, info, 'utf-8');
                callback();
            }
        }, {
            fields: ['summary', 'issuetype'],
            issuetype: issuetype || '',
            status: status || ''
        });
    }
}




function getIssueType (oType, callback) {
    var type = 'feat';
    if (oType === 'Task') {
        type = 'feat';
    }
    else if (oType === 'Bug') {
        type = 'fix';
    }
    return type;
}

function getIssueIdByNum (num) {
    for (var issueId in issueList) {
        if (issueId.split('-') && issueId.split('-')[1] === num) {
            return issueId
        }
    }
}

function pbcopy (data) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data);
    proc.stdin.end();
}

function startShell () {

    var exitMsg = '[Input \'exit\' To Shutdown Terminal]';

    console.log(msg(exitMsg));

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'jira> '
    });

    rl.prompt();

    rl.on('line', function (line)  {

        // var idReg = /\d+$/;
        if (line === 'exit') {
            pbcopy(line)
            rl.emit('close');
        }
        else if (/\d+$/.test(line) || /\w+\-\d+$/.test(line)) {
            var gitPreText = 'git commit -m "';
            var gitPostText = ' - "';
            var gitText = '';

            var issueId;
            var issueType;
            if (line.indexOf('-') !== -1) {
                issueId = line;
            }
            else {
                issueId = getIssueIdByNum(line);
            }

            issueType = issueList[issueId].type;

            gitText = gitPreText + issueId + ': ' + getIssueType(issueType) + gitPostText;
            console.log('[' + gitText + '] has been copied.')
            pbcopy(gitText)
            process.exit();
        }
        else if (/^\s*ls\s*/.test(line) || /^\s*list\s*/.test(line) ) {
            if (/^\s*ls\s*--cache\s*$/.test(line) || /^\s*list\s*--cache\s*$/.test(line)) {
                cached = true;
            }
            else {
                cached = false;
            }
            prompt(rl, getUsersIssues);
        }
        else if (/^\s*stat\s*/.test(line)) {

            prompt(rl, getStat);
        }
        else {
            rl.prompt();
        }


    }).on('close', function () {
        process.exit();
    });
}

function prompt (rl, callback, opt) {
    callback (function () {
        rl.prompt();
    });
}
