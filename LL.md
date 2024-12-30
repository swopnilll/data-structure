# Linked List
![image](https://github.com/user-attachments/assets/8cdfcdb0-dfaa-460a-973e-28a096496ccc)

```js
class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}
```

```js
class LinkedList {
 constructor(){
   // head will be at the top of the list
   this.head = null; 
  }
}
```

The primary operations that generally form a part of the `LinkedList` class are listed below:

-   `insertAtTail(data)` - inserts an element at the end of the linked list
-   `insertAtHead(data)` - inserts an element at the start/head of the linked list
-   `delete(data)` - deletes an element with your specified value from the linked list
-   `deleteAtHead()` - deletes the first element of the list
-   `search(data)` - searches for an element in the linked list
-   `isEmpty()` - returns true if the linked list is empty

`isEmpty()` is a helper function that will be useful in the implementation of other functions.

#  How you can traverse a Singly Linked List

```js
class LinkedList {
    constructor() {
        this.head = null; // Points to the first node
    }

    // Add a node to the list for demonstration purposes
    append(value) {
        const newNode = new Node(value);

        // If the list is empty
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }
}
```

```js
LinkedList.prototype.traverse = function() {
    let current = this.head;
    while (current) {
        console.log(current.value); // Access and print the node's value
        current = current.next;    // Move to the next node
    }
};
```

```js
const list = new LinkedList();

// Adding nodes to the list
list.append(10);
list.append(20);
list.append(30);

// Traversing the list
list.traverse();
// Output:
// 10
// 20
// 30
```

### **Points to Note**

1.  Start traversal from the `head` node.
2.  Continue traversing until `current` becomes `null`, which indicates the end of the list.
3.  During each iteration, you can perform operations like:
    -   Printing the node's value.
    -   Applying a function to each node's value.
    -   Collecting values into an array, etc.

### Sample Singly LL

```js
export class LinkList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let temp = this.head;

    while (temp !== null) {
      console.log(temp);
      temp = temp.nextElement;
    }
  }

  insertNodeAtHead(node) {
    // No Node Exists in the List
    if (this.head === null) {
      node.nextElement = null;
    } else {
      node.nextElement = this.head;
    }

    this.head = node;
  }

  deleteNodeAtHead() {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return;
    }

    this.head = this.head.nextElement;
  }

  insertNodeAtTail(node) {
    // No Node Exist
    if (this.isEmpty()) {
      node.nextElement = null;
      this.head = node;

      return;
    }

    let pointer = this.head;

    while (pointer.nextElement !== null) {
      pointer = pointer.nextElement;
    }

    pointer.nextElement = node;
    node.nextElement = null;
  }

  deleteNodeAtTail() {
    if (this.isEmpty()) {
      console.log("List is already empty");
      return;
    }

    if (this.head.nextElement === null) {
      // Special case: If there's only one node, just remove it
      this.head = null;
      return;
    }

    let pointer = this.head;

    while (pointer.nextElement.nextElement !== null) {
      pointer = pointer.nextElement; // 5
    }

    pointer.nextElement = null;
  }

  insertAfterNthNode(node, nth) {
    if (this.isEmpty()) {
      console.log("Node is Empty");
      return;
    }

    if (nth < 1) {
      console.log("nth should have some value");
    }

    let pointer = this.head;

    let traverseIndex = 1;

    // 1 2  3 4 5

    while (pointer.nextElement !== null && traverseIndex !== nth) {
      traverseIndex++; // 2 3 4 5
      pointer = pointer.nextElement; // 2 3 4 5
    }

    if (traverseIndex === nth) {
      node.nextElement = pointer.nextElement;
      pointer.nextElement = node;
      return;
    }

    if (traverseIndex < nth) {
      console.log("nth out of bound error");

      return;
    }
  }
}
```

# Difference Between Array and Linked List

Arrays and Linked Lists are fundamental data structures with different memory layouts and performance trade-offs.

## Key Differences

1. **Memory Layout**:
   - **Array**: Contiguous memory allocation.
   - **Linked List**: Non-contiguous memory allocation; nodes are scattered in memory.

2. **Insertion and Deletion**:
   - **Array**: 
     - Insert/Delete at head requires shifting elements → **O(n)**.
     - Insert/Delete at tail → **O(1)**.
   - **Linked List**:
     - Insert/Delete at head → **O(1)**.
     - Insert/Delete at tail requires traversal → **O(n)**.

3. **Access**:
   - **Array**: Direct indexing allows access in **O(1)**.
   - **Linked List**: Requires traversal to access elements → **O(n)**.

## Performance Comparison Table

| **Operation**      | **Linked List** | **Array** |
|---------------------|-----------------|-----------|
| **Access**          | O(n)           | O(1)      |
| **Insert (at head)**| O(1)           | O(n)      |
| **Delete (at head)**| O(1)           | O(n)      |
| **Insert (at tail)**| O(n)           | O(1)      |
| **Delete (at tail)**| O(n)           | O(1)      |

## Key Points
- **Insertion and Deletion**: Linked Lists excel when these operations occur frequently at the head.
- **Access**: Arrays are faster for direct access due to indexing.
- **Trade-offs**: 
  - Linked Lists provide flexibility in memory management.
  - Arrays are optimal for quick data access.

Choose the data structure based on the specific requirements of your application.

# Doubly Linked Lists (DLL)

![image](https://github.com/user-attachments/assets/729933f2-a9dd-430e-843e-f0852699d601)

![image](https://github.com/user-attachments/assets/ecac2f50-0be7-4dd0-aee6-3ad18ad48c4c)


```js
class LinkedList {
 constructor() {
   this.head=null;
   this.tail=null;
 }
}
```


```js
class Node {
  constructor(value) {
    this.data=value; //Stores data
    this.previousElement=null; //Stores pointer to previous element
    this.nextElement=null; //Stores pointer to next element
  }
}
```

# Singly Linked Lists (SLL) vs. Doubly Linked Lists (DLL)

Singly Linked Lists (SLL) and Doubly Linked Lists (DLL) are two common variations of the linked list data structure. This guide explores their differences, strengths, and use cases.

## Key Differences

### **Advantages of Doubly Linked Lists (DLLs)**
1. **Bidirectional Traversal**:
   - DLLs can be traversed in both directions, making them suitable for more complex algorithms.
   
2. **Improved Tail Operations**:
   - With the addition of a `previousElement` pointer and `tail` pointer, operations like deletion at the tail are faster (**O(1)** in DLL compared to **O(n)** in SLL).

### **Cost of DLLs**
- Nodes in DLLs require extra memory for storing the `previousElement` pointer.

## **Deletion at Tail in DLL**
The addition of a `previousElement` pointer simplifies and optimizes deletion at the tail:
- **Complexity**: Reduces from **O(n)** (SLL) to **O(1)** (DLL).
- **Steps**:
  1. Update the `tail` pointer to the second-to-last node.
  2. Set the new `tail`'s `nextElement` pointer to `null`.
  3. Handle edge cases (e.g., when deleting the tail empties the list, update the `head` to `null`).

## SLL vs. DLL Comparison Table

| **Operation**                  | **SLL**       | **DLL**       | **SLL with Tail Pointer** |
|---------------------------------|---------------|---------------|---------------------------|
| **Insert at head**              | O(1)          | O(1)          | O(1)                     |
| **Delete at head**              | O(1)          | O(1)          | O(1)                     |
| **Insert at tail**              | O(n)          | O(1)          | O(1)                     |
| **Delete at tail**              | O(n)          | O(1)          | O(n)                     |
| **Memory per node**             | Data + 1 ptr  | Data + 2 ptrs | Data + 1 ptr             |

## Key Points

- **DLLs**:
  - Suitable for bidirectional traversals and efficient tail operations.
  - Require more memory due to the additional pointer.
  
- **SLLs**:
  - Efficient for simple, unidirectional operations.
  - Less memory usage compared to DLLs.

- **SLL with Tail Pointer**:
  - Combines benefits of quick tail insertion but still slower tail deletion compared to DLL.

## Conclusion
Choose the linked list variant based on your application's needs:
- Use **SLLs** for simplicity and memory efficiency.
- Opt for **DLLs** when frequent bidirectional traversals or tail operations are required.
