var arr = [
    {
        dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
        story: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1607699032287-f58742a2693d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60", 
        story: "https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        story: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1563826904577-6b72c5d75e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        story: "https://images.unsplash.com/photo-1601469395673-68f2436d37ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }, 
    {
        dp: "https://images.unsplash.com/photo-1595828202173-0da4e8ff73a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
        story: "https://images.unsplash.com/photo-1595828204607-0d09afb58a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1595840635571-5d6abc7d584b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80",
        story: "https://images.unsplash.com/photo-1595840635587-3bb566bc41ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1595444616208-27b6b5df1875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=448&q=80",
        story: "https://images.unsplash.com/photo-1595444663884-820ed8a41e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
    },
];

var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`

})

document.querySelector("#stories").innerHTML = clutter;

document.querySelector("#stories").addEventListener("click", function(dets) {
    if (dets.target.tagName === 'IMG') { 
        document.querySelector("#full-screen").style.display = "block";
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
        setTimeout(function() {
            document.querySelector("#full-screen").style.display = "none";
        }, 3000);
    }
});

document.querySelector("#full-screen").addEventListener("click", function() {
    document.querySelector("#full-screen").style.display = "none";
});