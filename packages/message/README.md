# Message

The Message component is a feedback triggered by user actions.

## Installation

```bash
yarn add @illa-design/message
```

## Import component

```jsx
import { Message } from "@illa-dedign/message"
```

## API

### Message  Basic Properties

| Props    | Desc                           | Type                 | Default |
| -------- | ------------------------------ | -------------------- | ------- |
| content  | Content of the message         | `ReactNode \| string` | `-`     |
| showIcon | If true, show the message icon | `boolean`            | `true`  |
| icon     | Custom icon                    | `ReactNode`          | `-`     |
| duration | The auto close time            | `number`             | `3000`  |
| onClose  | Callback when close            | `() => void `        | `-`     |
| id       | The id of the notification     | `string`             | `-`     |
| position | The position of the message    | `"top" \| "bottom" `  | `-`     |
| closable | If true, show the close button | `boolean`            | `-`     |

### Method

```jsx
Message.info(content: String) / Message.info(config: Object)
Message.success(content: String) / Message.success(config: Object)
Message.warning(content: String) / Message.warning(config: Object)
Message.error(content: String) / Message.error(config: Object)
Message.normal(content: String) / Message.normal(config: Object)
Message.loading(content: String) / Message.loading(config: Object)
Message.clear()
```

### Config Provider

```
Message.config(options)
```

| Props        | Desc                         | Type                | Default               |
| ------------ | ---------------------------- | ------------------- | --------------------- |
| maxCount     | Max number of messages       | `number`            | `-`                   |
| getContainer | The container of the message | `() => HTMLElement` | `() => document.body` |
| duration     | The auto close time          | `number`            | `3000`                |

## Examples

### Basic usage

```jsx
Message.info({content:“ILLA Design”})
```

### Set the message closable

```jsx
Message.info({
  content: "ILLA Message",
  closable: true,
  onClose: handleClose,
})
```

### Set the auto close time

```jsx
Message.info({
  content: "ILLA Message",
  duration: 1500,
})
```

### Config provider

```jsx
Message.config({
  maxCount: 1,
  duration: 0,
  getContainer: () => document.getElementById("container"),
})
```