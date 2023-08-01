# mui-react-modal
Creating a Custom Modal and Dialog Component with MUI (Material-UI) in React for Enhanced User Experience.

# Install

### Using npm
```
npm i mui-react-modal
``` 

### Using yarn
```
yarn add mui-react-modal
```

# Basic Usage for modal
```jsx
import React, { useState } from 'react';
import { Modal } from 'mui-react-modal';
import { Button } from '@mui/material';

export default function Test() {
    const [open, setOpen] = useState(false);

    const handleModal = () => setOpen(!open);

    const modalAction = <Button variant='outlined' size='small'>Save</Button>
    
    return (
        <>
            <Button onClick={handleModal}>Open Modal</Button>
            <Modal
                open={open}
                title={"Modal heading"}
                description={"Modal description."}
                close={handleModal}
                action={modalAction}
                actionPosition="right"
            />
        </>
    )
}

```

# API & Supported parameters for modal

| Property     | Type           | Default       | Required     | Description                             |
| :---         | :---           | :---          | :---         | :---                                    |
| `open`       | `Boolean`     | `false`    |       `true`   | Controls whether the modal is open or closed.  |
| `close`       | `Function`     | `null`   |     `false`  | A function to close the modal.   |
| `title`       | `String \|\| Element`     | `null`    |    `false`    |  Show modal title.     |
| `description` | `String \|\| Element`     | `null`    |     `false`   |  Show modal description.  |
| `action`       | `Element`     | `null`    |     `false`   |   The element to be used as the modal's action button(s).      |
| `closeIcon`       | `Boolean`     | `true`    |     `false`   |    Determines whether the modal close icon is visible.  |
| `customStyle`       | `Object`     | `Object`    |    `false`   |  A style object that allows customization of the modal's default style.  |
| `actionPosition`  | `String` | `left` | `false` | The position of the action element(s) within the modal. Supported values are "left" "center"and"right". |
| `modalRootClass`       | `String`     | `null`  | `false`  | A CSS class name to modify the default style of the modal root. |
| `closeIconRootClass`       | `String`     | `null`    |     `false`   | A CSS class name to modify the default style of the close icon. |
| `titleRootClass`       | `String`     | `null`    |     `false`   | A CSS class name to modify the default style of the modal title. |
| `descriptionRootClass`       | `String`     | `null`    |     `false`  | A CSS class name to modify the default style of the modal description. |
| `actionRootClass`       | `String`     | `null`    |    `false`   | A CSS class name to modify the default style of the modal action element(s). |

# Basic Usage for dialog
```jsx
import React, { useState } from 'react';
import { Dialog } from 'mui-react-modal';
import { Button } from '@mui/material';

export default function Test() {
    const [open, setOpen] = useState(false);

    const handleDialog = () => setOpen(!open);

    const dialogAction = <Button variant='outlined' size='small'>Save</Button>
    
    return (
        <>
            <Button onClick={handleDialog}>Open Dialog Box</Button>
            <Dialog
                open={open}
                title={"Dialog Box Heading"}
                description={"Dialog Box Description."}
                close={handleDialog}
                action={dialogAction}
                actionPosition="right"
            />
        </>
    )
}


```
# API & Supported parameters for dialog

| Property     | Type           | Default       | Required     | Description                             |
| :---         | :---           | :---          | :---         | :---                                    |
| `open`       | `Boolean`     | `false`    |       `true`   | Controls whether the dialog is open or closed.  |
| `close`       | `Function`     | `null`   |     `false`  | A function to close the dialog.   |
| `title`       | `String \|\| Element`     | `null`    |    `false`    |  Show dialog title.     |
| `description` | `String \|\| Element`     | `null`    |     `false`   |  Show dialog description.  |
| `action`       | `Element`     | `null`    |     `false`   |   The element to be used as the dialog's action button(s).      |
| `dividers`       | `Boolean`     | `false`    |     `false`   |    Controls whether to show dividers between sections in the dialog.  |
| `closeIcon`       | `Boolean`     | `true`    |    `false`   |  Controls whether to show a close icon in the dialog header.  |
| `hideBackdrop`  | `String` | `false` | `false` | Controls whether to hide the backdrop when the dialog is open.|
| `dialogTitleSx`       | `Object`     | `{}`  | `false`  | Style object for the dialog title.|
| `dialogContentSx`       | `Object`     | `{}`    |     `false`   | Style object for the dialog content. |
| `dialogActionSx`       | `Object`     | `{}`    |     `false`   | Style object for the dialog actions.|
| `dialogRootSx`       | `Object`     | `{}`    |     `false`  | Style object for the dialog root element.|
| `closeIconSx`       | `Object`     | `{...}`    |    `false`   | Style object for the close icon. |
| `fullScreen`    |    `Boolean` |   `false`  |  `false`   |  Controls whether the dialog should be displayed in full-screen mode.   |


## Upcoming Features
We are dedicated to continuously enhancing the library to provide an even better user experience.
## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request.