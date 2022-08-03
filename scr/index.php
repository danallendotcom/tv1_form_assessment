<?php
$qs='';
if(!empty($_GET)):
	$qs='?';
	$first_get=true;
	foreach($_GET as $key=>$value):
		if($first_get):
			$amp='';
			$first_get=false;
		else:
			$amp='&';
		endif;
		$qs.=$amp.$key.'='.$value;
	endforeach;
endif;
header("location:".basename(__DIR__).'.php'.$qs);
