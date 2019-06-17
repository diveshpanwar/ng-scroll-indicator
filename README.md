# NG-Scroll-Indicator

## Description
This library adds a horizontal scrollbar to the top of the webpage.

## Installation

```node
    npm install ng-scroll-indicator
```
## Usage
  ```html
    <scroll-indicator></scroll-indicator>
  ```
## Options
* **color**:
  This option helps user to set the color of the scrollbar, it will take string as value.
  *Usage*
  ```html
    <scroll-indicator [color]="'red'"></scroll-indicator>
  ```
  or
  ```html
    <scroll-indicator [color]="'#333'"></scroll-indicator>
  ```
  * **backgroundColor**:
  This option helps user to set the background color of the scrollbar, it will take string as value.
  *Usage*
  ```html
    <scroll-indicator [backgroundColor]="'lightGrey'"></scroll-indicator>
  ```
  or
  ```html
    <scroll-indicator [backgroundColor]="'#333'"></scroll-indicator>
  ```
  * **height**:
  This option helps user to set the height of the scrollbar, it will take string as value.
  *Usage*
  ```html
    <scroll-indicator [height]="'15px'"></scroll-indicator>
  ```
  or
  ```html
    <scroll-indicator [height]="'0.7rem'"></scroll-indicator>
  ```