# mui-react-modal
Creating a Custom Modal and Dialog Component with MUI (Material-UI) in React for Enhanced User Experience.

# install
```
npm i mui-react-modal
```

# Basic Usage
```
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
| `open`       | `Boolean`     | `false`    |       `true`   | For open and close modal.  |
| `close`       | `Function`     | `null`   |     `false`  | For close modal.   |
| `title`       | `String \|\| Element`     | `null`    |    `false`    |  Show modal title.     |
| `description` | `String \|\| Element`     | `null`    |     `false`   |  Show modal description.  |
| `action`       | `Element`     | `null`    |     `false`   |   For modal buttom action buttons.       |
| `closeIcon`       | `Boolean`     | `true`    |     `false`   |    Show or hide modal close icon based on condition.  |
| `customStyle`       | `Object`     | `Object`    |    `false`   |  Use style object to modify modal default style.  |
| `actionPosition`  | `String` | `left` | `false` | For action element position. Supported parameters "left", "center" "right".|
| `modalRootClass`       | `String`     | `null`  | `false`  | Use this parameter if you want to modify modal root default style. |
| `closeIconRootClass`       | `String`     | `null`    |     `false`   | If you want to modify close icon default style.|
| `titleRootClass`       | `String`     | `null`    |     `false`   | If you want to modify title default style. |
| `descriptionRootClass`       | `String`     | `null`    |     `false`  | If you want to modify description default style. |
| `actionRootClass`       | `String`     | `null`    |    `false`   | If you want to modify action default style. |

# Keywords
Modal, Dialog, React, MUI, Material-UI, Component, Responsive, Customizable, User Interface, UI, Library, npm, Package, JavaScript, Frontend.