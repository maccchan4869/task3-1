window.onload = () => {
  const tasks = [];
  const btnAddTask = document.getElementById('btnAddTask');
  const tbody = document.getElementById('tbodyTasks');
  const taskStatus = {
    working: '0',   // 作業中
    complete: '1'   // 完了
  }
  
  // 追加ボタン押下時の処理
  btnAddTask.addEventListener('click', () => {
    tasks.push({
      content: document.getElementById('textInputTask').value,
      status: taskStatus.working
    });
    dispTask();
    document.getElementById('textInputTask').value = '';
  });

  /**
   * タスクを表示
   */
  const dispTask = () => {
    // IDを再設定するため一度タスクを削除
    tbody.textContent = '';
    tasks.forEach((value, index) => {
      const row = document.createElement('tr');
      const statusVal = value.status === taskStatus.working ? '作業中' : '完了';
      // 行追加
      row.appendChild(createCell(index));
      row.appendChild(createCell(value.content));
      row.appendChild(createButton(statusVal, 'changeStatus'));
      row.appendChild(createButton('削除', 'deleteTask'));
      tbody.appendChild(row);
    });
  };

  /**
   * Cellを生成
   *  
   * @param {string} value  - cellの文字
   * @return {object} cell  - cellのDOM
   */
  const createCell = (value) => {
    const cell = document.createElement('td');
    cell.textContent = value;
    return cell;
  };

  /**
   * ボタンのCellを生成
   *  
   * @param {string} value      - ボタンの文字 
   * @param {string} className  - 付与するクラス名
   * @return {object} cell      - buttonCellのDOM
   */
  const createButton = (value, className) => {
    const cell = document.createElement('td');
    const button = document.createElement('input');
    button.classList.add(className);
    button.type = 'button';
    button.value = value;
    cell.appendChild(button);
    return cell;
  };
};
