<script setup>
import InputElement from '@/components/elements/InputElement.vue';
import axios from 'axios';

// const data = () => {
//   return {
//     books: [],
//     addBookForm: {
//       title: '',
//       author: '',
//       read: [],
//     },
//   };
// };

// const getBooks = () => {
//   const path = "https://localhost:5000/books";
//   axios.get(path)
//     .then((res) => {
//       data.books = res.data.books;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// const addBook = (payload) => {
//   const path = "https://localhost:5000/books";
//   axios.post(path, payload)
//     .then(() => {
//       getBooks();
//     })
//     .catch((error) => {
//       console.log(error);
//       getBooks();
//     });
// }

// const initForm = () => {
//   data.addBookForm.title = "";
//   data.addBookForm.author = "";
//   data.addBookForm.read = [];
// }

// const onSubmit = (evt) => {
//   evt.preventDefault();
//   let read = false;
//   if ( data.addBookForm.read[0] ) read = true;
//   const payload = {
//     title: data.addBookForm.title,
//     author: data.addBookForm.author,
//     read: read
//   };

//   addBook(payload);
//   initForm();
// }

// const onReset = (evt) => {
//   evt.preventDefault();
//   initForm();
// }

// getBooks();
</script>


<template>
  <div class="test">

    <h1>Books</h1>
    <hr><br><br>

    <InputElement
      placeholder="Type something..."
    />

    <button class="btn ok">
      Add Book
    </button>

    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Read?</th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="item in filteredList"
        :key="item"
      >
        <td 
          v-for="field in fields" 
          :key="field"
        >
          {{ item[field] }}
        </td>
        <td class="btn-group">
          <button class="btn warn">Update</button>
          <button class="btn error">Delete</button>
        </td>
      </tr>
    </tbody>
  </div>
</template>


<style lang="scss" scoped>
.test {
  width: auto;
  height: auto;

  h1 {
    color: white;
    font: 30pt 'Arvo', sans-serif;
  }

  tr {
    color: white;
    font: 14pt 'Arvo', sans-serif;

    th {
      padding-top: 20px;
      padding-left: 5px;
      min-width: 150px;
      text-align: left;
    }

    td {
      text-align: left;
      width: auto;
      padding: 5px;
      background-color: var(--bg-secondary);
    }
  }
}

.btn {
  margin: 2px;
  text-align: center;
  border: none;
  font: 12pt 'Arvo', sans-serif;
  cursor: pointer;

  &.ok {
    color: white;
    background-color: rgba(green, 0.85);
  }

  &.warn {
    background-color: rgba(orange, 0.85);
  }

  &.error {
    color: white;
    background-color: rgba(red, 0.85);
  }
}
</style>
