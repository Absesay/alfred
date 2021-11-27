import "./Output.css"

export function App() {
    
    return (
        <div>
      <h1 class="app-header">ALFRED</h1>

      <div class="add-task">
        <input type="text" autocomplete="off" placeholder="Add New Task" class="task-input"/>
        <input type="button" class="submit-task addBtn" title="Add Task"/>
      </div>

      <ul class="task-list">
        <li class="task-list-item">
          <label class="task-list-item-label">
            <input type="checkbox"/>
            <span>My task to do</span>
          </label>
          <span class="delete-btn"></span>
        </li>

        <li class="task-list-item">
          <label class="task-list-item-label">
            <input type="checkbox"/>
            <span>Another task hahaha</span>
          </label>
          <span class="delete-btn"></span>
        </li>

        <li class="task-list-item">
          <label class="task-list-item-label">
            <input type="checkbox"/>
            <span>Demo the test son</span>
          </label>
          <span class="delete-btn"></span>
        </li>

      </ul>

    </div>
        );
  }