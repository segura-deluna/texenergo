$(document).ready(function() {
	
	$(window).scroll(function() {
		150 < $(window).scrollTop() ? ($("#menu").css("display", "none"), 
			$("#menu-small").css("display", "block")) : ($("#menu").css("display", "block"), 
			$("#menu-small").css("display", "none"))
	}),


	$(".trigger-down").on("click", function() {
		$(".trigger-menu").toggle("slow")
	}), 

	$(".starters-down").on("click", function() {
		$(".starters-menu").toggle("slow")
	}), 

	$(".module-down").on("click", function() {
		$(".module-menu").toggle("slow")
	}), 

	$(".auto-down").on("click", function() {
		$(".auto-menu").toggle("slow")
	}),

	 $(".unit-down").on("click", function() {
		$(".unit-menu").toggle("slow")
	}),

	$(".search-down").on("click", function() {
	  $(".search-menu").toggle("slow")
	}),



	$("#btnModal, #btnModal2, #btnModal3").click(function() {
		$("#exampleModal").modal("show")
	}),




	$(".new-year__slider").slick({
		infinite: !0,
		speed: 1e3,
		cssEase: "linear",
		autoplay: !0,
		autoplaySpeed: 5e3,
		arrows: !1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
	}),

	 $(".starters__gallery").slick({
		infinite: !0,
		speed: 1e3,
		cssEase: "linear",
		autoplay: !0,
		autoplaySpeed: 5e3,
		arrows: !1,
		fade: !1,
		dots: !1,
		adaptiveHeight: !1
	}), 

	google.maps.event.addDomListener(window, "load", function() {
		var e = {
			center: new google.maps.LatLng(55.75632, 37.620065),
			zoom: 15
		};
		new google.maps.Map(document.getElementById("map"), e)
	}), $(".help__head").next().hide(), $(".help__head").click(function() {
		$(this).next().slideToggle(), $(".help__head").not(this).next().stop(!0, !0).slideUp()
	})
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjc3MiLCJvbiIsInRvZ2dsZSIsImNsaWNrIiwibW9kYWwiLCJzbGljayIsImluZmluaXRlIiwic3BlZWQiLCJjc3NFYXNlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiYXJyb3dzIiwicHJldkFycm93IiwibmV4dEFycm93IiwiZmFkZSIsImRvdHMiLCJhZGFwdGl2ZUhlaWdodCIsImdvb2dsZSIsIm1hcHMiLCJldmVudCIsImFkZERvbUxpc3RlbmVyIiwibWFwT3B0aW9ucyIsImNlbnRlciIsIkxhdExuZyIsInpvb20iLCJNYXAiLCJnZXRFbGVtZW50QnlJZCIsIm5leHQiLCJoaWRlIiwidGhpcyIsInNsaWRlVG9nZ2xlIiwibm90Iiwic3RvcCIsInNsaWRlVXAiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBSWhCRixFQUFFRyxRQUFRQyxPQUFPLFdBQ1UsSUFBdEJKLEVBQUVHLFFBQVFFLGFBQ1hMLEVBQUUsU0FBU00sSUFBSSxVQUFVLFFBQ3pCTixFQUFFLGVBQWVNLElBQUksVUFBVSxXQUUvQk4sRUFBRSxTQUFTTSxJQUFJLFVBQVUsU0FDekJOLEVBQUUsZUFBZU0sSUFBSSxVQUFVLFdBUW5DTixFQUFFLGlCQUFpQk8sR0FBRyxRQUFTLFdBQzdCUCxFQUFFLGlCQUFpQlEsT0FBTyxVQUc1QlIsRUFBRSxrQkFBa0JPLEdBQUcsUUFBUyxXQUM5QlAsRUFBRSxrQkFBa0JRLE9BQU8sVUFHN0JSLEVBQUUsZ0JBQWdCTyxHQUFHLFFBQVMsV0FDNUJQLEVBQUUsZ0JBQWdCUSxPQUFPLFVBRzNCUixFQUFFLGNBQWNPLEdBQUcsUUFBUyxXQUMxQlAsRUFBRSxjQUFjUSxPQUFPLFVBR3pCUixFQUFFLGNBQWNPLEdBQUcsUUFBUyxXQUMxQlAsRUFBRSxjQUFjUSxPQUFPLFVBV3ZCUixFQUFFLHFDQUFxQ1MsTUFBTSxXQUUzQ1QsRUFBRSxpQkFBaUJVLE1BQU0sVUFRN0JWLEVBQUUscUJBQXFCVyxPQUNyQkMsVUFBVSxFQUNWQyxNQUFPLElBQ1BDLFFBQVMsU0FDVEMsVUFBVSxFQUNWQyxjQUFlLElBQ2ZDLFFBQVEsRUFDUkMsVUFBVyx3R0FDWEMsVUFBVywyR0FPYm5CLEVBQUUsc0JBQXNCVyxPQUN0QkMsVUFBVSxFQUNWQyxNQUFPLElBQ1BDLFFBQVMsU0FDVEMsVUFBVSxFQUNWQyxjQUFlLElBQ2ZDLFFBQVEsRUFDUkcsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLGdCQUFnQixJQTZCbEJDLE9BQU9DLEtBQUtDLE1BQU1DLGVBQWV2QixPQUFRLE9BYnpDLFdBRUUsSUFFSXdCLEdBQ0ZDLE9BSGlCLElBQUlMLE9BQU9DLEtBQUtLLE9BQU8sU0FBVyxXQUluREMsS0FBTSxJQUdFLElBQUlQLE9BQU9DLEtBQUtPLElBQUk5QixTQUFTK0IsZUFBZSxPQUFRTCxLQVVoRTNCLEVBQUUsZUFBZWlDLE9BQU9DLE9BRXhCbEMsRUFBRSxlQUFlUyxNQUFNLFdBQ3JCVCxFQUFFbUMsTUFBTUYsT0FBT0csY0FDZnBDLEVBQUUsZUFBZXFDLElBQUlGLE1BQU1GLE9BQU9LLE1BQUssR0FBTSxHQUFNQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vINCX0LDQvNC10L3QsCDQvNC10L3RjiDQsiDRiNCw0L/QutC1XHJcblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKT4xNTApe1xyXG4gICAgICAkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnI21lbnUtc21hbGwnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQoJyNtZW51JykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnI21lbnUtc21hbGwnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICAvL9CS0YvQv9Cw0LTQsNGO0YnQuNC1INC/0L7QtNC80LXQvdGOINCy0LXRgNGF0L3QtdCz0L4g0L3QsNCy0LHQsNGA0LBcclxuXHJcblxyXG4gICQoJy50cmlnZ2VyLWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJy50cmlnZ2VyLW1lbnUnKS50b2dnbGUoXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuc3RhcnRlcnMtZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN0YXJ0ZXJzLW1lbnUnKS50b2dnbGUoXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubW9kdWxlLWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJy5tb2R1bGUtbWVudScpLnRvZ2dsZShcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5hdXRvLWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJy5hdXRvLW1lbnUnKS50b2dnbGUoXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcudW5pdC1kb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcudW5pdC1tZW51JykudG9nZ2xlKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8v0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XHJcblxyXG5cclxuICAgIC8vINCf0YDQuCDQutC70LjQutC1INC/0L4g0LrQvdC+0L/QutC1LCDRgSBpZD1cImJ0bk1vZGFsXCJcclxuICAgICQoXCIjYnRuTW9kYWwsICNidG5Nb2RhbDIsICNidG5Nb2RhbDNcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vINCe0YLQutGA0YvRgtGMINC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSBpZD1cImV4YW1wbGVNb2RhbFwiXHJcbiAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgLy/QodC70LDQudC00LXRgCDQv9C10YDQstC+0Lkg0YHQtdC60YbQuNC4XHJcblxyXG4gICQoJy5uZXcteWVhcl9fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMTAwMCxcclxuICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj4nXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgLy/QodC70LDQudC00LXRgCDRgdC10LrRhtC40LggLnN0YXJ0ZXJzXHJcblxyXG4gICQoJy5zdGFydGVyc19fZ2FsbGVyeScpLnNsaWNrKHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDEwMDAsXHJcbiAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBmYWRlOiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlXHJcbiAgICAvLyBhc05hdkZvcjogJy50ZXh0X2RvdHRlZCdcclxuICB9KTtcclxuXHJcbiAgLy8gJCgnLnRleHRfZG90dGVkJykuc2xpY2soeyAvLyDQvdCw0YHRgtGA0L7QudC60LAg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgLy8gICBzbGlkZXNUb1Nob3c6IDYsIC8vINGD0LrQsNC30YvQstCw0LXQvCDRh9GC0L4g0L3Rg9C20L3QviDQv9C+0LrQsNC30YvQstCw0YLRjCAzINC90LDQstC40LPQsNGG0LjQvtC90L3Ri9GFINC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxuICAvLyAgIGFzTmF2Rm9yOiAnLnN0YXJ0ZXJzX19nYWxsZXJ5JywgLy8g0YPQutCw0LfRi9Cy0LDQtdC8INGH0YLQviDRjdGC0L4g0L3QsNCy0LjQs9Cw0YbQuNGPINC00LvRjyDQsdC70L7QutCwINCy0YvRiNC1XHJcbiAgLy8gICBmb2N1c09uU2VsZWN0OiB0cnVlIC8vINGD0LrQsNC30YvQstCw0LXQvCDRh9GC0L4g0LHRiyDRgdC70LDQudC00LXQu9C+0YHRjCDQv9C+INC60LvQuNC60YNcclxuICAvLyB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIGluaXRNYXAoKSAtINGE0YPQvdC60YbQuNGPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC60LDRgNGC0YtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQvdCwINC60LDRgNGC0LUuINCo0LjRgNC+0YLQsDogNTUuNzU2MzIwLCDQlNC+0LvQs9C+0YLQsDogMzcuNjIwMDY1XHJcbiAgICB2YXIgY2VudGVyTGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1NS43NTYzMjAsIDM3LjYyMDA2NSk7XHJcbiAgICAvLyDQntCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LUg0L7Qv9GG0LjQuCDRgSDQutC+0YLQvtGA0YvQvNC4INCx0YPQtNC10YIg0L/RgNC+0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNC90L3QsCDQutCw0YDRgtCwXHJcbiAgICB2YXIgbWFwT3B0aW9ucyA9IHtcclxuICAgICAgY2VudGVyOiBjZW50ZXJMYXRMbmcsIC8vINCa0L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQvNGLINCx0LXRgNC10Lwg0LjQtyDQv9C10YDQtdC80LXQvdC90L7QuSBjZW50ZXJMYXRMbmdcclxuICAgICAgem9vbTogMTUgICAgICAgICAgICAgIC8vINCX0YPQvCDQv9C+INGD0LzQvtC70YfQsNC90LjRji4g0JLQvtC30LzQvtC20L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0L7RgiAwINC00L4gMjFcclxuICAgIH07XHJcbiAgICAvLyDQodC+0LfQtNCw0LXQvCDQutCw0YDRgtGDINCy0L3Rg9GC0YDQuCDRjdC70LXQvNC10L3RgtCwICNtYXBcclxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCBtYXBPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8vINCW0LTQtdC8INC/0L7Qu9C90L7QuSDQt9Cw0LPRgNGD0LfQutC4INGB0YLRgNCw0L3QuNGG0YssINC/0L7RgdC70LUg0Y3RgtC+0LPQviDQt9Cw0L/Rg9GB0LrQsNC10LwgaW5pdE1hcCgpXHJcbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCBcImxvYWRcIiwgaW5pdE1hcCk7XHJcblxyXG5cclxuXHJcbiAgLy/QktGL0L/QsNC00LDRjtGJ0LjQuSDRgdC/0LjRgdC+0Log0LIg0YHQtdC60YbQuNC4IEhFTFBcclxuXHJcbiAgJCgnLmhlbHBfX2hlYWQnKS5uZXh0KCkuaGlkZSgpO1xyXG5cclxuICAkKCcuaGVscF9faGVhZCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKCcuaGVscF9faGVhZCcpLm5vdCh0aGlzKS5uZXh0KCkuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=