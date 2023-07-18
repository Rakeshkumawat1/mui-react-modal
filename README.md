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

# Basic Usage
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

# API & Supported parameters

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

