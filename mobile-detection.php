<?php
	/* BASED ON...
	*
	*	Code URL
	*	http://code.google.com/p/studio-hyperset
	*
	*	Author
	*	Quimby Melton
	*	SH Web Developer & Director of Operations
	*	quimby@studiohyperset.com
	*
	*	Aditional Credits
	*	v.1.2 build thanks to Google Code user: http://code.google.com/u/@WRdQQ1NTBBREXQd%2F/
	*
	*/
	function is_mobile(
	) {
		foreach (array(
			// Apple
			'iPhone', 'iPod', 'iPad', 'iTouch',
			// eReaders; see also iPad above
			'Sony Reader', 'Kindle', 'Nook',
			// gaming
			'PlayStation', 'Nintendo', 'Wii',
			// PDAs
			'Dell Streak', 'Dell Axim', 'HP iPAQ', 'palmOne',
			'PalmOS', 'Palm', 'PalmSource', 'Pocket PC',
			// phones and mobile carriers
			'Android', 'O2', 'Bell Mobility', 'Rogers',
			'Verizon', 'Spring', 'Cingular', 'T-Mobile',
			'RiM', 'BenQ', 'AT&T', 'Pearl', 'ARCHOS',
			'Xiino', 'PIE', 'NetFront', 'Plucker',
			'PocketLink', 'OpenWave', 'Minimo',
			'ftxBrowser', 'EudoraWeb', 'ASTEL',
			'PDXGW', 'Air-Edge', 'J-Phone', 'Vodafone',
			'UP.Browser', 'KDDI-KC31', 'KDDI', 'DoCoMo',
			'AvantGo', 'Orange', 'Cricket', 'bSquare',
			'Nexus One', 'HTC', 'LGE', 'LG', 'Motorola',
			'MOT', 'NEC', 'Nokia', 'Psion', 'QTEK', 'SAGEM',
			'Samsung', 'SEC', 'AU-MIC', 'Sanyo', 'Siemens',
			'Sharp', 'Samsung', 'Ericsson', 'SonyEricsson',
			'Tear', 'UCWEB', 'ZTE', 'WebPro', 'ProxiNet',
			'Elaine', 'BlackBerry'
		) as $type) {
			if (stripos($_SERVER['HTTP_USER_AGENT'], $type) !== FALSE) {
				return true;
			}
		}
		return true;
	}
