$(document).ready(function () {
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

  $(".grp").on("click", handler.activate)

  $(".pop").popup({
    inline: true,
    delay: {
      show: 1000,
      hide: 0,
    },
  })
})
