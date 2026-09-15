$(document).ready(function() {
    const list = $("#ft_list");
    const newbtn = $("#new-btn");

    function savecookie(todos) {
        const value = encodeURIComponent(JSON.stringify(todos));
        const day = 1;
        const date = new Date();
        date.setTime(date.getTime() + day * 24 * 60 * 60);
        document.cookie = `todos=${value}; expires=${date.toUTCString()}; path=/`;
    }
    
    function loadcookie() {
        const match = document.cookie.match(/(?:^|; )todos=([^;]*)/);
        if (!match) return [];
        return JSON.parse(decodeURIComponent(match[1]));
    }
    
    function persistcurrentlist() {
        const todos = list.children().map(function() { return $(this).text(); }).get();
        savecookie(todos);
    }
    
    function createtodo(text) {
        const item = $("<div>").addClass("todo-item").text(text);
    
        item.on("click", () => {
            const ok = confirm(`ลบ "${text}" ใช่ไหม?`);
            if (ok) {
                item.remove();
                persistcurrentlist();
            }
        });
    
        return item;
    }
    
    newbtn.on("click", () => {
        const text = prompt("สร้าง TO_DO ใหม่:");
        if (text == null) {
            return;
        }
        if (text.trim() == '') {
            return;
        }
    
        const item = createtodo(text.trim());
        list.prepend(item);
        persistcurrentlist();
    });
    
    function openfromcookie() {
        const todos = loadcookie();
        todos.forEach(text => {
            const item = createtodo(text);
            list.append(item);
        });
    }
    
    openfromcookie();
});
