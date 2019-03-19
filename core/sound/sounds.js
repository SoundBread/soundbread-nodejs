var sounds;

sounds = [
    {
        src: 'crickets.mp3',
        img: 'cricket.jpg',
        id: 'crickets',
        title: 'Crickets'
    },
    {
        src: 'downer.mp3',
        img: 'sadtrombone.jpg',
        id: 'downer',
        title: 'Downer'
    },
    {
        src: 'rimshot.mp3',
        img: 'rimshot.jpg',
        id: 'rimshot',
        title: 'Rimshot'
    },
    {
        src: 'shame.mp3',
        img: 'shame.jpg',
        id: 'shame',
        title: 'Shame'
    },
    {
        src: 'hodor.mp3',
        img: 'hodor.jpg',
        id: 'hodor',
        title: 'Hodor'
    },
    {
        src: 'youlose.mp3',
        img: 'badluckbrian.jpg',
        id: 'brian',
        title: 'Youlose'
    },
    {
        src: 'tim.mp3',
        img: 'tim.jpg',
        id: 'tim',
        title: 'Tim'
    },
    {
        src: 'whip.mp3',
        img: 'whip.jpg',
        id: 'whip',
        title: 'Whip'
    },
    {
        src: 'tripod.mp3',
        img: 'tripod.jpg',
        id: 'tripod',
        title: 'Tripod',
        cost: 2
    },
    {
        src: 'nein.mp3',
        img: 'nein.jpg',
        id: 'nein',
        title: 'Nein'
    },
    { 
        src: 'scream.mp3', 
        img: 'scream.jpg', 
        id: 'scream', 
        title: 'Scream' 
    },
    { 
        src: 'intel.mp3', 
        img: 'intel.jpg', 
        id: 'intel', 
        title: 'Intel' 
    },
    { 
        src: 'winxp.mp3', 
        img: 'winxp.jpg', 
        id: 'winxp', 
        title: 'Windows XP' 
    },
    { 
        src: 'turks.mp3', 
        img: 'turks.jpg', 
        id: 'turks', 
        title: 'Turks Fruit', 
        cost: 2 
    },
    { 
        src: 'dramatic.mp3', 
        img: 'dramatic.jpg', 
        id: 'dramatic', 
        title: 'Dramatic' 
    },
    { 
        src: 'wrong.mp3', 
        img: 'wrong.jpg', 
        id: 'wrong', 
        title: 'Wrong' 
    },
    { 
        src: 'michael.mp3', 
        img: 'michael.jpg', 
        id: 'michael', 
        title: 'Michael' 
    },
    { 
        src: 'chopper.mp3', 
        img: 'chopper.jpg', 
        id: 'chopper', 
        title: 'Chopper' 
    },
    { 
        src: 'duifmeneer.mp3', 
        img: 'duifmeneer.jpg', 
        id: 'duifmeneer', 
        title: 'Duifmeneer' 
    },
    { 
        src: 'snoop.mp3', 
        img: 'snoop.jpg', 
        id: 'snoop', 
        title: 'Snoop' 
    },
    { 
        src: 'giggity.mp3', 
        img: 'giggity.jpg', 
        id: 'giggity', 
        title: 'Giggity' 
    },
    { 
        src: 'sorry.mp3', 
        img: 'sorry.jpg', 
        id: 'sorry', 
        title: 'Sorry' 
    },
    { 
        src: '20thcentury.mp3', 
        img: '20thcentury.jpg', 
        id: '20thcentury', 
        title: '20th Century Fox', 
        cost: 3 
    },
    { 
        src: 'jurassic.mp3', 
        img: 'jurassic.jpg', 
        id: 'jurassic', 
        title: 'Jurassic Park', 
        cost: 3 
    },
    { 
        src: 'biem.mp3', 
        img: 'biem.jpg', 
        id: 'biem', 
        title: 'BIEM!!!' 
    },
    { 
        src: 'icq.mp3', 
        img: 'icq.jpg', 
        id: 'icq', 
        title: 'Uh-oh', 
        cost: 0 
    },
    { 
        src: 'bert.mp3', 
        img: 'bert.jpg', 
        id: 'bert', 
        title: 'Heee Bert!' 
    },
    { 
        src: 'hahabier.mp3', 
        img: 'hahabier.jpg', 
        id: 'hahabier', 
        title: 'Ha Ha bier!' 
    },
    { 
        src: 'tirol.mp3', 
        img: 'tirol.jpg', 
        id: 'tirol', 
        title: 'Absolut Tirol' 
    },
    { 
        src: 'overdracht.mp3', 
        img: 'overdracht.jpg', 
        id: 'overdracht', 
        title: 'OVERDRACHT!' 
    },
    { 
        src: 'power.mp3', 
        img: 'power.jpg', 
        id: 'power', 
        title: 'I\'ve got the power' 
    },
    { 
        src: 'mario.mp3', 
        img: 'mario.jpg', 
        id: 'mario', 
        title: 'Super Mario Bross', 
        cost: 3 
    },
    { 
        src: 'kingoflosers.mp3', 
        img: 'kingoflosers.jpg', 
        id: 'loserking', 
        title: 'King of the losers', 
        cost: 2 
    },
    { 
        src: 'kluis.mp3', 
        img: 'kluis.jpg', 
        id: 'kluis', 
        title: 'kluis', 
        cost: 1 
    },
    { 
        src: 'woodpecker.mp3', 
        img: 'woodpecker.jpg', 
        id: 'woodpecker', 
        title: 'Woody', 
        cost: 1 
    },
    { 
        src: 'bright.mp3', 
        img: 'bright.jpg', 
        id: 'bright', 
        title: 'Bright Light', 
        cost: 1 
    },
    { 
        src: 'goedzo.mp3', 
        img: 'goedzo.jpg', 
        id: 'goedzo', 
        title: 'Wel Goed Zo Hoor!', 
        cost: 1 
    },
    { 
        src: 'water.mp3', 
        img: 'water.jpg', 
        id: 'water', 
        title: 'Water?', 
        cost: 1 
    },
    { 
        src: 'buma.mp3', 
        img: 'buma.jpg', 
        id: 'buma', 
        title: 'Dat is toch niet te geloven?', 
        cost: 1 
    },
    { 
        src: 'goodmorning.mp3', 
        img: 'goodmorning.jpg', 
        id: 'goodmorning', 
        title: 'Good Morning', 
        cost: 1 
    },
    { 
        src: 'greenbrain.mp3', 
        img: 'greenbrain.jpg', 
        id: 'greenbrain', 
        title: 'Brainstorm', 
        hidden: false 
    },
    // Keep hidden: true at end to not show hints in shortcuts
    { 
        src: 'maniacal.mp3', 
        img: 'maniacal.jpg', 
        id: 'maniacal', 
        title: 'Maniacal', 
        hidden: true 
    },
    { 
        src: 'gaaay.mp3', 
        img: 'gaaay.jpg', 
        id: 'gaaay', 
        title: 'Gaaay', 
        hidden: true 
    },
    { 
        src: 'pieper.mp3', 
        img: 'pieper.jpg', 
        id: 'pieper', 
        title: 'Pieper', 
        hidden: true, 
        cost: 5 
    },
    // Integration of Dumpert Soundboard items
    {
        src: 'dumpert/5_euros.mp3',
        img: 'dumpert/5_euros.jpg',
        id: 'dumpert_5_euros',
        title: '5_euros'
    },
    {
        src: 'dumpert/village_people_360_kick.mp3',
        img: 'dumpert/village_people_360_kick.jpg',
        id: 'dumpert_village_people_360_kick',
        title: 'village_people_360_kick'
    },
    {
        src: 'dumpert/allemaal_onvoldoende.mp3',
        img: 'dumpert/allemaal_onvoldoende.jpg',
        id: 'dumpert_allemaal_onvoldoende',
        title: 'allemaal_onvoldoende'
    },
    {
        src: 'dumpert/bam_bam_bam.mp3',
        img: 'dumpert/bam_bam_bam.jpg',
        id: 'dumpert_bam_bam_bam',
        title: 'bam_bam_bam'
    },
    {
        src: 'dumpert/bel_de_wouten.mp3',
        img: 'dumpert/bel_de_wouten.jpg',
        id: 'dumpert_bel_de_wouten',
        title: 'bel_de_wouten'
    },
    {
        src: 'dumpert/030_beter_als_020.mp3',
        img: 'dumpert/030_beter_als_020.jpg',
        id: 'dumpert_030_beter_als_020',
        title: '030_beter_als_020'
    },
    {
        src: 'dumpert/biem.mp3',
        img: 'dumpert/biem.jpg',
        id: 'dumpert_biem',
        title: 'biem'
    },
    {
        src: 'dumpert/boer.mp3',
        img: 'dumpert/boer.jpg',
        id: 'dumpert_boer',
        title: 'boer'
    },
    {
        src: 'dumpert/boodschap.mp3',
        img: 'dumpert/boodschap.jpg',
        id: 'dumpert_boodschap',
        title: 'boodschap'
    },
    {
        src: 'dumpert/cumshot.mp3',
        img: 'dumpert/cumshot.jpg',
        id: 'dumpert_cumshot',
        title: 'cumshot'
    },
    {
        src: 'dumpert/das_mien_merk.mp3',
        img: 'dumpert/das_mien_merk.jpg',
        id: 'dumpert_das_mien_merk',
        title: 'das_mien_merk'
    },
    {
        src: 'dumpert/noem_mij_maar_willy.mp3',
        img: 'dumpert/noem_mij_maar_willy.jpg',
        id: 'dumpert_noem_mij_maar_willy',
        title: 'noem_mij_maar_willy'
    },
    {
        src: 'dumpert/de_hele_klas_heeft_een_onvoldoende.mp3',
        img: 'dumpert/de_hele_klas_heeft_een_onvoldoende.jpg',
        id: 'dumpert_de_hele_klas_heeft_een_onvoldoende',
        title: 'de_hele_klas_heeft_een_onvoldoende'
    },
    {
        src: 'dumpert/dikke_billen_5_reeten.mp3',
        img: 'dumpert/dikke_billen_5_reeten.jpg',
        id: 'dumpert_dikke_billen_5_reeten',
        title: 'dikke_billen_5_reeten'
    },
    {
        src: 'dumpert/dikke_bmw.mp3',
        img: 'dumpert/dikke_bmw.jpg',
        id: 'dumpert_dikke_bmw',
        title: 'dikke_bmw'
    },
    {
        src: 'dumpert/dis_een_jonko.mp3',
        img: 'dumpert/dis_een_jonko.jpg',
        id: 'dumpert_dis_een_jonko',
        title: 'dis_een_jonko'
    },
    {
        src: 'dumpert/niet_mijn_winkel_vriend.mp3',
        img: 'dumpert/niet_mijn_winkel_vriend.jpg',
        id: 'dumpert_niet_mijn_winkel_vriend',
        title: 'niet_mijn_winkel_vriend'
    },
    {
        src: 'dumpert/helemaal_knettah.mp3',
        img: 'dumpert/helemaal_knettah.jpg',
        id: 'dumpert_helemaal_knettah',
        title: 'helemaal_knettah'
    },
    {
        src: 'dumpert/dumpert_anthem.mp3',
        img: 'dumpert/dumpert_anthem.jpg',
        id: 'dumpert_dumpert_anthem',
        title: 'dumpert_anthem'
    },
    {
        src: 'dumpert/dumpert_reeten.mp3',
        img: 'dumpert/dumpert_reeten.jpg',
        id: 'dumpert_dumpert_reeten',
        title: 'dumpert_reeten'
    },
    {
        src: 'dumpert/fuck.mp3',
        img: 'dumpert/fuck.jpg',
        id: 'dumpert_fuck',
        title: 'fuck'
    },
    {
        src: 'dumpert/hij_heet_geen_henk.mp3',
        img: 'dumpert/hij_heet_geen_henk.jpg',
        id: 'dumpert_hij_heet_geen_henk',
        title: 'hij_heet_geen_henk'
    },
    {
        src: 'dumpert/gefeliciteerd_eh.mp3',
        img: 'dumpert/gefeliciteerd_eh.jpg',
        id: 'dumpert_gefeliciteerd_eh',
        title: 'gefeliciteerd_eh'
    },
    {
        src: 'dumpert/geit.mp3',
        img: 'dumpert/geit.jpg',
        id: 'dumpert_geit',
        title: 'geit'
    },
    {
        src: 'dumpert/godmiljaar.mp3',
        img: 'dumpert/godmiljaar.jpg',
        id: 'dumpert_godmiljaar',
        title: 'godmiljaar'
    },
    {
        src: 'dumpert/kersemus.mp3',
        img: 'dumpert/kersemus.jpg',
        id: 'dumpert_kersemus',
        title: 'kersemus'
    },
    {
        src: 'dumpert/rookmevrouw.mp3',
        img: 'dumpert/rookmevrouw.jpg',
        id: 'dumpert_rookmevrouw',
        title: 'rookmevrouw'
    },
    {
        src: 'dumpert/wat_een_grote_vis.mp3',
        img: 'dumpert/wat_een_grote_vis.jpg',
        id: 'dumpert_wat_een_grote_vis',
        title: 'wat_een_grote_vis'
    },
    {
        src: 'dumpert/haha_bier.mp3',
        img: 'dumpert/haha_bier.jpg',
        id: 'dumpert_haha_bier',
        title: 'haha_bier'
    },
    {
        src: 'dumpert/hardcore_will_never_die.mp3',
        img: 'dumpert/hardcore_will_never_die.jpg',
        id: 'dumpert_hardcore_will_never_die',
        title: 'hardcore_will_never_die'
    },
    {
        src: 'dumpert/hekkie.mp3',
        img: 'dumpert/hekkie.jpg',
        id: 'dumpert_hekkie',
        title: 'hekkie'
    },
    {
        src: 'dumpert/hey.mp3',
        img: 'dumpert/hey.jpg',
        id: 'dumpert_hey',
        title: 'hey'
    },
    {
        src: 'dumpert/waaaaah.mp3',
        img: 'dumpert/waaaaah.jpg',
        id: 'dumpert_waaaaah',
        title: 'waaaaah'
    },
    {
        src: 'dumpert/ik_hoef_niet_te_tanken_schat.mp3',
        img: 'dumpert/ik_hoef_niet_te_tanken_schat.jpg',
        id: 'dumpert_ik_hoef_niet_te_tanken_schat',
        title: 'ik_hoef_niet_te_tanken_schat'
    },
    {
        src: 'dumpert/ik_kon_er_niks_aan_doen.mp3',
        img: 'dumpert/ik_kon_er_niks_aan_doen.jpg',
        id: 'dumpert_ik_kon_er_niks_aan_doen',
        title: 'ik_kon_er_niks_aan_doen'
    },
    {
        src: 'dumpert/ik_neuk_jullie_allemaal_de_moeder.mp3',
        img: 'dumpert/ik_neuk_jullie_allemaal_de_moeder.jpg',
        id: 'dumpert_ik_neuk_jullie_allemaal_de_moeder',
        title: 'ik_neuk_jullie_allemaal_de_moeder'
    },
    {
        src: 'dumpert/ik_wil_gewoon_tuteren.mp3',
        img: 'dumpert/ik_wil_gewoon_tuteren.jpg',
        id: 'dumpert_ik_wil_gewoon_tuteren',
        title: 'ik_wil_gewoon_tuteren'
    },
    {
        src: 'dumpert/ik_wil_kaas.mp3',
        img: 'dumpert/ik_wil_kaas.jpg',
        id: 'dumpert_ik_wil_kaas',
        title: 'ik_wil_kaas'
    },
    {
        src: 'dumpert/blikje_in_de_water.mp3',
        img: 'dumpert/blikje_in_de_water.jpg',
        id: 'dumpert_blikje_in_de_water',
        title: 'blikje_in_de_water'
    },
    {
        src: 'dumpert/je_halve_kont_staat_open.mp3',
        img: 'dumpert/je_halve_kont_staat_open.jpg',
        id: 'dumpert_je_halve_kont_staat_open',
        title: 'je_halve_kont_staat_open'
    },
    {
        src: 'dumpert/jeroen_doe_normaal_gek.mp3',
        img: 'dumpert/jeroen_doe_normaal_gek.jpg',
        id: 'dumpert_jeroen_doe_normaal_gek',
        title: 'jeroen_doe_normaal_gek'
    },
    {
        src: 'dumpert/ohohoh_wtf_jeroen.mp3',
        img: 'dumpert/ohohoh_wtf_jeroen.jpg',
        id: 'dumpert_ohohoh_wtf_jeroen',
        title: 'ohohoh_wtf_jeroen'
    },
    {
        src: 'dumpert/john_deere_trekker.mp3',
        img: 'dumpert/john_deere_trekker.jpg',
        id: 'dumpert_john_deere_trekker',
        title: 'john_deere_trekker'
    },
    {
        src: 'dumpert/kom_op_dan.mp3',
        img: 'dumpert/kom_op_dan.jpg',
        id: 'dumpert_kom_op_dan',
        title: 'kom_op_dan'
    },
    {
        src: 'dumpert/koop_dan.mp3',
        img: 'dumpert/koop_dan.jpg',
        id: 'dumpert_koop_dan',
        title: 'koop_dan'
    },
    {
        src: 'dumpert/korter.mp3',
        img: 'dumpert/korter.jpg',
        id: 'dumpert_korter',
        title: 'korter'
    },
    {
        src: 'dumpert/krakaka.mp3',
        img: 'dumpert/krakaka.jpg',
        id: 'dumpert_krakaka',
        title: 'krakaka'
    },
    {
        src: 'dumpert/lekker_batsen.mp3',
        img: 'dumpert/lekker_batsen.jpg',
        id: 'dumpert_lekker_batsen',
        title: 'lekker_batsen'
    },
    {
        src: 'dumpert/mand.mp3',
        img: 'dumpert/mand.jpg',
        id: 'dumpert_mand',
        title: 'mand'
    },
    {
        src: 'dumpert/man_man_man.mp3',
        img: 'dumpert/man_man_man.jpg',
        id: 'dumpert_man_man_man',
        title: 'man_man_man'
    },
    {
        src: 'dumpert/wat_een_mooi_ding.mp3',
        img: 'dumpert/wat_een_mooi_ding.jpg',
        id: 'dumpert_wat_een_mooi_ding',
        title: 'wat_een_mooi_ding'
    },
    {
        src: 'dumpert/net_pindakaas_gegeten.mp3',
        img: 'dumpert/net_pindakaas_gegeten.jpg',
        id: 'dumpert_net_pindakaas_gegeten',
        title: 'net_pindakaas_gegeten'
    },
    {
        src: 'dumpert/niemand_liegt_tegen_mij.mp3',
        img: 'dumpert/niemand_liegt_tegen_mij.jpg',
        id: 'dumpert_niemand_liegt_tegen_mij',
        title: 'niemand_liegt_tegen_mij'
    },
    {
        src: 'dumpert/niet_toeteren.mp3',
        img: 'dumpert/niet_toeteren.jpg',
        id: 'dumpert_niet_toeteren',
        title: 'niet_toeteren'
    },
    {
        src: 'dumpert/what_no_munnie.mp3',
        img: 'dumpert/what_no_munnie.jpg',
        id: 'dumpert_what_no_munnie',
        title: 'what_no_munnie'
    },
    {
        src: 'dumpert/je_hebt_nooit_geen_geld.mp3',
        img: 'dumpert/je_hebt_nooit_geen_geld.jpg',
        id: 'dumpert_je_hebt_nooit_geen_geld',
        title: 'je_hebt_nooit_geen_geld'
    },
    {
        src: 'dumpert/of_nee_toch_niet.mp3',
        img: 'dumpert/of_nee_toch_niet.jpg',
        id: 'dumpert_of_nee_toch_niet',
        title: 'of_nee_toch_niet'
    },
    {
        src: 'dumpert/optyvuh_gauw.mp3',
        img: 'dumpert/optyvuh_gauw.jpg',
        id: 'dumpert_optyvuh_gauw',
        title: 'optyvuh_gauw'
    },
    {
        src: 'dumpert/jij_trekt_ze_toch_over_de_balie.mp3',
        img: 'dumpert/jij_trekt_ze_toch_over_de_balie.jpg',
        id: 'dumpert_jij_trekt_ze_toch_over_de_balie',
        title: 'jij_trekt_ze_toch_over_de_balie'
    },
    {
        src: 'dumpert/papa_ik_heb_iets_heel_ergs_gedaan.mp3',
        img: 'dumpert/papa_ik_heb_iets_heel_ergs_gedaan.jpg',
        id: 'dumpert_papa_ik_heb_iets_heel_ergs_gedaan',
        title: 'papa_ik_heb_iets_heel_ergs_gedaan'
    },
    {
        src: 'dumpert/plausibel.mp3',
        img: 'dumpert/plausibel.jpg',
        id: 'dumpert_plausibel',
        title: 'plausibel'
    },
    {
        src: 'dumpert/van_die_grote_postzakken.mp3',
        img: 'dumpert/van_die_grote_postzakken.jpg',
        id: 'dumpert_van_die_grote_postzakken',
        title: 'van_die_grote_postzakken'
    },
    {
        src: 'dumpert/hey_amigo_dont_touch_me.mp3',
        img: 'dumpert/hey_amigo_dont_touch_me.jpg',
        id: 'dumpert_hey_amigo_dont_touch_me',
        title: 'hey_amigo_dont_touch_me'
    },
    {
        src: 'dumpert/allen_maar_rondjes.mp3',
        img: 'dumpert/allen_maar_rondjes.jpg',
        id: 'dumpert_allen_maar_rondjes',
        title: 'allen_maar_rondjes'
    },
    {
        src: 'dumpert/iedereen_noemt_m_willy.mp3',
        img: 'dumpert/iedereen_noemt_m_willy.jpg',
        id: 'dumpert_iedereen_noemt_m_willy',
        title: 'iedereen_noemt_m_willy'
    },
    {
        src: 'dumpert/shows_met_de_mannen.mp3',
        img: 'dumpert/shows_met_de_mannen.jpg',
        id: 'dumpert_shows_met_de_mannen',
        title: 'shows_met_de_mannen'
    },
    {
        src: 'dumpert/jullie_spelen_met_mijn_prive.mp3',
        img: 'dumpert/jullie_spelen_met_mijn_prive.jpg',
        id: 'dumpert_jullie_spelen_met_mijn_prive',
        title: 'jullie_spelen_met_mijn_prive'
    },
    {
        src: 'dumpert/steeds_maar_weer.mp3',
        img: 'dumpert/steeds_maar_weer.jpg',
        id: 'dumpert_steeds_maar_weer',
        title: 'steeds_maar_weer'
    },
    {
        src: 'dumpert/tatatatatatata_tatatataa.mp3',
        img: 'dumpert/tatatatatatata_tatatataa.jpg',
        id: 'dumpert_tatatatatatata_tatatataa',
        title: 'tatatatatatata_tatatataa'
    },
    {
        src: 'dumpert/u_wou_niet_luisteren.mp3',
        img: 'dumpert/u_wou_niet_luisteren.jpg',
        id: 'dumpert_u_wou_niet_luisteren',
        title: 'u_wou_niet_luisteren'
    },
    {
        src: 'dumpert/de_verkeerde_kaaaaant.mp3',
        img: 'dumpert/de_verkeerde_kaaaaant.jpg',
        id: 'dumpert_de_verkeerde_kaaaaant',
        title: 'de_verkeerde_kaaaaant'
    },
    {
        src: 'dumpert/zonne_grote_vuurbal_jonguh.mp3',
        img: 'dumpert/zonne_grote_vuurbal_jonguh.jpg',
        id: 'dumpert_zonne_grote_vuurbal_jonguh',
        title: 'zonne_grote_vuurbal_jonguh'
    },
    {
        src: 'dumpert/vuurwerkje.mp3',
        img: 'dumpert/vuurwerkje.jpg',
        id: 'dumpert_vuurwerkje',
        title: 'vuurwerkje'
    },
    {
        src: 'dumpert/wat_heb_je.mp3',
        img: 'dumpert/wat_heb_je.jpg',
        id: 'dumpert_wat_heb_je',
        title: 'wat_heb_je'
    },
    {
        src: 'dumpert/yes_yes_yes_girl.mp3',
        img: 'dumpert/yes_yes_yes_girl.jpg',
        id: 'dumpert_yes_yes_yes_girl',
        title: 'yes_yes_yes_girl'
    },
    {
        src: 'dumpert/zo_is_natuur.mp3',
        img: 'dumpert/zo_is_natuur.jpg',
        id: 'dumpert_zo_is_natuur',
        title: 'zo_is_natuur'
    },
    {
        src: 'dumpert/keiglad.mp3',
        img: 'dumpert/keiglad.jpg',
        id: 'dumpert_keiglad',
        title: 'keiglad'
    },
    {
        src: 'dumpert/helemaal_mooi.mp3',
        img: 'dumpert/helemaal_mooi.jpg',
        id: 'dumpert_helemaal_mooi',
        title: 'helemaal_mooi'
    },
    {
        src: 'dumpert/lazer_op.mp3',
        img: 'dumpert/lazer_op.jpg',
        id: 'dumpert_lazer_op',
        title: 'lazer_op'
    }
];

module.exports = sounds;