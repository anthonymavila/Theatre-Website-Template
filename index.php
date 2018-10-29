<?php

	$template = file_get_contents("views/boilerplate.html");

	if ( @ isset($_GET['page']) ) {
		$content = file_get_contents("views/{@var=content}.html");
	} else {
		$content = file_get_contents("views/home.html");
	}
	
	$ddp = file_get_contents("views/dd_whats_playing.html");
	$ddl = file_get_contents("views/dd_locations.html");
	$ddr = file_get_contents("views/dd_rest.html");

	$template = str_replace("{@var=content}", 			$content, 	$template);
	$template = str_replace("{@var=dd_whats_playing}", 	$ddp, 		$template);
	$template = str_replace("{@var=dd_locations}", 		$ddl, 		$template);
	$template = str_replace("{@var=dd_rest}", 			$ddr, 		$template);



	
         
         
	echo $template;

?>