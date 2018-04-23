require(["jquery","handlebars"],function($,Handlebars){
	
	
	function render(data){

		var Source=$("#rander").html();
		var Template=Handlebars.compile(Source);
		var html=Template(data);
		$("#rander").html(html)
		
		
		
		$(function(){
			$("ul>li>p").hide()
			$("ul>li").on("click",function(){
				var ind = $(this).index();
				$(this).eq(ind).show().siblings().children("li>p").hide();
			})
		})
	}
	render()
})