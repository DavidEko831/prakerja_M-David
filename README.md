# My React App

My React App adalah aplikasi sederhana yang dibangun menggunakan React. Aplikasi ini menampilkan informasi dasar tentang pengembang serta fitur pengubah suhu dari Fahrenheit ke Celsius.

## Fitur

- **Header**: Menampilkan navbar dengan nama pengembang dan tautan ke halaman utama.
- **Footer**: Menampilkan tautan ke profil GitHub pengembang.
- **Form Pengubah Suhu**: Mengkonversi suhu dari Fahrenheit ke Celsius dan menampilkan hasilnya. Selain itu, fitur ini juga memungkinkan pengguna untuk mengubah warna latar belakang dengan mengklik teks "ubah warna".

## Struktur Proyek

# Temperature Converter and To-Do List

## Components

### Form Component
- **Purpose**: Main component that combines temperature conversion and a to-do list.
- **State**:
  - `fahrenheit`: Holds the input value for Fahrenheit.
  - `result`: Holds the result of the temperature conversion.
  - `bgColor`: Toggles the background color.
  - `tasks`: Array of tasks in the to-do list.
  - `completedTasks`: Number of tasks that have been completed or removed.

### TaskInput Component
- **Purpose**: Input form to add new tasks.
- **State**:
  - `task`: Holds the value of the new task to be added.

### TaskList Component
- **Purpose**: Displays the list of tasks and allows tasks to be marked as complete.

## React Hooks Used

### useState
- Manages state in functional components.
- Examples: `fahrenheit`, `result`, `bgColor`, `tasks`, `completedTasks`.

### useEffect
- Manages side effects in functional components.
- Example: Showing alerts on mount and unmount.

## Usage
- Convert Fahrenheit to Celsius.
- Add and remove tasks in a to-do list.
- Track total tasks and completed/removed tasks.

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the application.


