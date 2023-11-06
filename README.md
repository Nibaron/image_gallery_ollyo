# IMAGE GALLERY
![image](https://github.com/Nibaron/image_gallery_ollyo/assets/36547410/dc1367d5-70e3-4448-8f64-c50f6aa7688d)

### `npm start`

Runs the [vercel website](https://image-gallery-ollyo-red.vercel.app/) in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Gallery Data Store and Delete`
- All the images were stored in a `cardData` state.
- onClicked Card were stored inside `selectedCard` state.
- Then, filter was used to Delete the selected items.

### `Feature Image`
- Image at index == 0 was considered as Feature Photo.
- It is larger in size than other image card.

### ` Drag and Drop Sorting`
- `React-beautiful-dnd` was used for drag and droped.
- DragDropContext, Droppable, Draggable were used to implement the functionality

