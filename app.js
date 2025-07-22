const taskInput = document.getElementById('todo');
const addButton = document.getElementById('bt');
const taskContainer = document.getElementById('list');
const errorMsg = document.getElementById("error-message");

addButton.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task === "") {
        errorMsg.style.display = "block"; // Show error message
        return;
    }
    errorMsg.style.display = "none"; // Hide error if input is valid

    // Create and add the task to the list
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);

   taskInput.value = ""; // Clear the input field

console.log(taskContainer);

    // إنشاء العنصر <li> للمهمة
    const taskElement = document.createElement('li');
    taskElement.textContent = taskInput.value;  // وضع النص داخل العنصر

    // إنشاء زر "Complete"
    const taskCompleted = document.createElement('button');
    taskCompleted.textContent = 'Complete';
    taskCompleted.className = 'complete-btn';  // استخدام الكلاس الصحيح

    // إنشاء زر "X" للحذف
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.className = 'remove-btn';  // استخدام الكلاس الصحيح

    // إضافة الأزرار للمهمة
    taskElement.appendChild(taskCompleted);
    taskElement.appendChild(removeButton);
    taskElement.className = 'task-item';  // استخدام الكلاس الصحيح للمهمة

    // إضافة المهمة إلى الـ taskContainer
    taskContainer.appendChild(taskElement);

    // إضافة وظيفة زر "Complete"
    taskCompleted.addEventListener('click', function() {
        taskElement.classList.toggle('completed');  // إضافة أو إزالة الكلاس "completed"
    });

    // إضافة وظيفة زر "X" (الحذف)
    removeButton.addEventListener('click', function() {
        taskContainer.removeChild(taskElement);  // حذف العنصر من الـ taskContainer
    });
    taskElement.appendChild(removeButton);

    // مسح محتوى الـ input بعد إضافة المهمة
    taskInput.value = '';
});


