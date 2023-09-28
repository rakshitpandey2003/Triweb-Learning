# BasicJSProject

Welcome to the Interactive Text Display project! This project allows you to input text, choose a position, and display that text in one of four block spaces.

https://github.com/rakshitpandey2003/Triweb-Learning/assets/110710174/553a220d-c171-4c06-a2fc-3ef69566302b

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Working](#working)
- [Contributing](#contributing)

## Overview

This project is a simple interactive web application that lets you enter text, choose where you want to display it, and place it in one of the four block spaces as well as move the text to other boxes. It's a fun way to experiment with HTML, CSS, and JavaScript and understand how user interactions work.

## Features

- Input button to enter text.
- Write button to choose a position for the text.
- Four block spaces to display the text.
- Four buttons, one for each block, to display the text in that block.
- Erase button to remove the text.

## Usage

1. Open the project's `index.html` file in a web browser.

2. Enter the text you want to display in the input field.

3. Click the "Write" button to choose a position for the text.

4. Click one of the block buttons (Block 1, Block 2, Block 3, Block 4) to display the text in the selected block.

## Working

1. Write button functionality - retrieves user input from an HTML input element with the ID 'text' and displays an alert message if the input is empty, prompting the user to enter text or alerts them to choose where to write the text otherwise.

<p align="center">
  <img width = "500" src = "https://github.com/rakshitpandey2003/Triweb-Learning/assets/110710174/4aef4606-c1f7-41ea-a4d0-c225c89a2c80">
</p>

2. Move text functionality - clear the content of a container element with the ID of content using the 'erase' function and then inserts the 'text' variable's value into that container, effectively moving the text to 'content1'.

<p align="center">
<img width = "500" src = "https://github.com/rakshitpandey2003/Triweb-Learning/assets/110710174/e26050e7-74cf-4226-9f3f-e84b6292ae7d">
</p>

Similarly create a move function fo the remaining three container elements.

## Contributing

Contributions are welcome! If you'd like to enhance this project or fix any issues, please fork the repository and submit a pull request.

