<?php
//die(__LINE__.__FILE__);
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');
mb_http_input('UTF-8');
mb_language('uni');
mb_regex_encoding('UTF-8');
ob_start('mb_output_handler');
$back=debug_backtrace (DEBUG_BACKTRACE_PROVIDE_OBJECT,1);
/******************* Nothing is Mandatory **********************/
/***************************************************************/
/************************* HOWEVER!!! **************************/
/*************** UNIVERSAL WEB HOOKUPS ARE USELESS *************/
/*************** WITHOUT THESE CONSTANTS STORED AS *************/
/***************             VARS         **********************/
/***************************************************************/
/***************            START     **************************/

$pointguardfile=basename(__FILE__);
$GLOBALS['basePath']
	=$hookups_path
	=$basePath
	=__DIR__.'/';
$GLOBALS['trace']=0;


/***************************************************************/
/***************             VARS         **********************/
/***************************************************************/
/****************             END         **********************/
/***************************************************************/

/******************* connect to uews  START **********************/
require $_SERVER['DOCUMENT_ROOT'].'/uews_docroot_breadcrumbs.php';
require $path_to_home_directory.'uews_path_to_header_jewel.php';
puttrace(__LINE__,__FILE__, 'earliest trace possible, ', 'without distorting timing records');
/******************* path to site header  END ************************/




/**************** config access  START *******************************/
$GLOBALS['login_enabled']=true;
$GLOBALS['admin_enabled']=true;
$site_admin_required_to_continue
=$GLOBALS['site_admin_required_to_continue']
=true;
/**************** config access  END *******************************/

/**************** universal hookups  START *******************************/
require $path_to_header_jewel.'/hookup.php';
require $GLOBALS['sparky_error_adjudent'];
$content_titles['subtitle_ogdesc']['in_effect']=$migration_phase;
require $path_to_header_jewel.'header.php';
/**************** universal hookups  END *******************************/

$page_cookiename='admin_dir_listings';
require	$_SERVER['DOCUMENT_ROOT'].'/uews_breadcrumbs/secure_dir_listing/index_boss_guts.php';

require $path_to_header_jewel.'/footer.php';
