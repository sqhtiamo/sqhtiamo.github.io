---
title: html标准学习
date: 2017-02-09 14:45:00
tags: [standard, html, html5]
categories: 外文翻译
---

## DOM

## <base>


### href

### target


```
enum DocumentReadyState { "loading", "interactive", "complete" };

[OverrideBuiltins]
partial /*sealed*/ interface Document {
  // resource metadata management
  [PutForwards=href, Unforgeable] readonly attribute Location? location;
           attribute DOMString domain;
  readonly attribute DOMString referrer;
           attribute DOMString cookie;
  readonly attribute DOMString lastModified;
  readonly attribute DocumentReadyState readyState;

  // DOM tree accessors
  getter object (DOMString name);
           attribute DOMString title;
           attribute DOMString dir;
           attribute HTMLElement? body;
  readonly attribute HTMLHeadElement? head;
  readonly attribute HTMLCollection images;
  readonly attribute HTMLCollection embeds;
  readonly attribute HTMLCollection plugins;
  readonly attribute HTMLCollection links;
  readonly attribute HTMLCollection forms;
  readonly attribute HTMLCollection scripts;
  NodeList getElementsByName(DOMString elementName);

  // dynamic markup insertion
  Document open(optional DOMString type = "text/html", optional DOMString replace = "");
  WindowProxy open(DOMString url, DOMString name, DOMString features, optional boolean replace = false);
  void close();
  void write(DOMString... text);
  void writeln(DOMString... text);

  // user interaction
  readonly attribute WindowProxy? defaultView;
  readonly attribute Element? activeElement;
  boolean hasFocus();
           attribute DOMString designMode;
  boolean execCommand(DOMString commandId, optional boolean showUI = false, optional DOMString value = "");
  boolean queryCommandEnabled(DOMString commandId);
  boolean queryCommandIndeterm(DOMString commandId);
  boolean queryCommandState(DOMString commandId);
  boolean queryCommandSupported(DOMString commandId);
  DOMString queryCommandValue(DOMString commandId);

  // special event handler IDL attributes that only apply to Document objects
  [LenientThis] attribute EventHandler onreadystatechange;
};
Document implements GlobalEventHandlers;
```

## 7. scripts

## 11. Obsolete features

### 11.1 Warnings

- obsolete permitted DOCTYPE
- border of <img> when value="0" [other situation is Non-conforming features] (use CSS instead)
- language=JavaScript and no type="text/JavaScript"
- name on <a> element and value is no empty String
- maxLength when input type="number"
- size when input type="number"

### 11.2 Non-conforming features

- Element
- Attribute

### 11.3 Requirements for implementations

- applet
- marquee (slides effect use CSS animation instead)
- frame
- Application cache
- Others


## 12. IANA considerations
```
IANA:
```
