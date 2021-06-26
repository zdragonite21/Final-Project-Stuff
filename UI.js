$(document).ready(function () {
  var $buttons = $(".grp")

  var handler = {
    activate: function () {
      $(this).addClass("active").siblings().removeClass("active")
    },
  }

  $("#sb").click(function () {
    $(".ui.labeled.icon.sidebar")
      .sidebar("setting", "transition", "overlay")
      .sidebar("toggle")
  })

  $buttons.on("click", handler.activate)

  $(".pop").popup({
    inline: true,
    delay: {
      show: 1000,
      hide: 0,
    },
  })
})