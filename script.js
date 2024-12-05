const configs = [
    {justify: "right", align: "end", imageUrl: "url('../IMG/Lr7.png')", url: "https://artemrozh.github.io/Lr7_8Ball.io/"},
    {justify: "left", align: "end", imageUrl: "url('../IMG/Lr8.png')", url: "https://artemrozh.github.io/LR8_Mini_Casino.github.io/"},
    {justify: "right", align: "top", imageUrl: "url('../IMG/Lr9.png')", url: "https://artemrozh.github.io/LR9_BlackJack_Of_Artem.github.io/"},
    {justify: "left", align: "top", imageUrl: "url('../IMG/Lr10.png')", url: "https://artemrozh.github.io/LR10_Slot_Machine.github.io/"},
];

$(".green").each(function(i) {
    $(this).css("justify-content", configs[i].justify);
    $(this).css("align-items", configs[i].align);
    $(this).css("background-image", configs[i].imageUrl);

    $(this).click(function(){
        window.open(configs[i].url, "_blank");
    });
});
