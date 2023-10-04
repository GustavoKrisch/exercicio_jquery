$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault(); 
        var tarefa = $("#nome-tarefa").val();

        if (tarefa !== "") {
            var novoItem = $("<li>").text(tarefa);
            $("ul").append(novoItem);
            $("#nome-tarefa").val("");
        }
    });
    
    $("ul").on("click", "li", function() {
        $(this).toggleClass("task-completed");
    });
    
});
