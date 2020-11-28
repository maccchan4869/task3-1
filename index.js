window.onload = () => {
  const tasks = [];
  const btnAddTask = document.getElementById('btnAddTask');
  const tbody = document.getElementById('tbodyTasks');

  /** @member {object} dispItem  - 表示する文字列 */
  const dispItem = {
    work: '作業中',
    delete: '削除'
  };

  // 追加ボタン押下時の処理
  btnAddTask.addEventListener('click', () => {

    // 入力値を配列に追加
    tasks.push(document.getElementById('textInputTask').value);

    // タスクを表示
    dispTask();

    // テキストボックスを初期化
    document.getElementById('textInputTask').value = '';
  });

  // タスクの表示処理
  const dispTask = () => {
    // 子要素を削除
    tbody.innerHTML = '';

    tasks.forEach((value, index) => {
      // 新規行追加
      const newRow = tbody.insertRow();

      // ID描画
      const newId = newRow.insertCell();
      newId.innerHTML = index;

      // コメント描画
      const newComment = newRow.insertCell();
      newComment.innerHTML = value;

      // 状態（作業中）ボタン描画
      const newBtnWork = newRow.insertCell();
      newBtnWork.innerHTML = '<input type="button" value="' + dispItem.work + '" />';

      // 削除ボタン描画
      const newBtnDelete = newRow.insertCell();
      newBtnDelete.innerHTML = '<input type="button" value="' + dispItem.delete + '" />';
    });
  };
};
