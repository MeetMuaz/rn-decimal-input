# 🧮 rn-decimal-input

**React Native Custom Input** for consistent decimal formatting — adds `,` (comma) even when entering whole numbers! Now with optional currency symbols! 🎯

![npm](https://img.shields.io/npm/v/rn-decimal-input?color=green&style=flat-square)
![npm](https://img.shields.io/npm/dw/rn-decimal-input?style=flat-square)
[![GitHub](https://img.shields.io/badge/github-meetmuaz-blue?style=flat-square&logo=github)](https://github.com/meetmuaz/rn-decimal-input)
[![MIT License](https://img.shields.io/npm/l/rn-decimal-input?style=flat-square)](./LICENSE)

---

## ✨ Features

- ✅ Comma formatting for all numbers (even whole numbers!)
- 💲 Optional currency symbol support ($, €, £, etc.)
- 🧠 Automatically handles input formatting
- 🎨 Fully styleable with `TextInput` props
- 💪 TypeScript support
- 📦 Lightweight and fast

---

## 📦 Installation

```bash
npm install rn-decimal-input
```

or with Yarn:

```bash
yarn add rn-decimal-input
```

---

## 🧱 Usage

### Basic Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormattedDecimalInput from 'rn-decimal-input';

export default function App() {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <FormattedDecimalInput
        value={value}
        onChangeText={setValue}
        placeholder="Enter number"
        style={styles.input}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
  },
});
```

### With Currency Symbol

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormattedDecimalInput from 'rn-decimal-input';

export default function App() {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <FormattedDecimalInput
        value={value}
        onChangeText={setValue}
        placeholder="Enter amount"
        style={styles.input}
        keyboardType="numeric"
        currency="$"  // Add currency symbol prefix
      />
    </View>
  );
}
```

---

## ⚙️ Props

This component accepts all native `TextInput` props 📥. Below are some key ones:

| Prop           | Type     | Description                                 | Required |
|----------------|----------|---------------------------------------------|----------|
| `value`        | string   | The current input value                     | Yes      |
| `onChangeText` | function | Callback when text changes (formatted)      | Yes      |
| `style`        | object   | Styles to apply to the input                | No       |
| `currency`     | string   | Currency symbol to display before the value | No       |
| `...TextInputProps` | any | All other native TextInput props supported | No       |

---

## 🧪 Output Examples

| Input | Displayed (No Currency) | Displayed (With `currency="$"`) |
|-------|-------------------------|--------------------------------|
| `1`   | `1`                     | `$1`                           |
| `100` | `100`                   | `$100`                         |
| `1000`| `1,000`                 | `$1,000`                       |
| `1000000.50` | `1,000,000.50`   | `$1,000,000.50`                |

---

## 💡 Why Use This?

Say goodbye to messy formatting and inconsistent user input! This is perfect for:

- 💰 Price fields
- 📈 Financial data
- 💲 Currency inputs
- 🔢 Any decimal number entry

---

## 🧑‍💻 Author

Made with ❤️ by [@meetmuaz](https://github.com/meetmuaz)

---

## 📃 License

MIT License © 2025  
Check [LICENSE](./LICENSE) for details.

---

## 📢 Contributions Welcome!

Have ideas, suggestions, or improvements? Feel free to open a PR or an issue! 🚀

---

> Happy Coding! 💙