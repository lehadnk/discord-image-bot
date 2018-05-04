const ImageRepositoryError = require("./ImageRepositoryError");

let images = {
    "shadow priest elf female": [
        "https://pre00.deviantart.net/62d2/th/pre/i/2017/018/9/6/lottery__shadow_priest_by_masta_shivo-davvnxo.jpg",
        "https://pre00.deviantart.net/5987/th/pre/i/2018/108/0/d/shadow_priest_by_antheiavaulor-dc962hq.jpg",
        "https://pre00.deviantart.net/0cd5/th/pre/f/2015/270/b/0/cal_freakout_by_hazelgee-d9b3oat.jpg",
        "https://www.selectgame.com.br/wp-content/uploads/2016/10/Hearthstone-Tyrande-Murmur%C3%A9olo-Index.jpg",
        "https://78.media.tumblr.com/f1cb2cc23cb736bbd944196d250c06d3/tumblr_p4okyhmbbh1usu64fo1_r1_500.jpg",
        "http://orig12.deviantart.net/452a/f/2013/279/5/9/nightelf_shadow_priest_by_moaningbird-d6pivpp.jpg",
        "https://orig00.deviantart.net/8021/f/2010/275/5/8/belf_shadow_priest_speedpaint_by_renonvesir-d2zxzck.jpg",
        "https://pre00.deviantart.net/a0b2/th/pre/f/2014/224/f/5/blood_elf___hekathi_cathubodua_by_nemhainn-d7utmy0.jpg",
        "https://1.bp.blogspot.com/-fBxeweEqE3A/Vvo3o_2RRtI/AAAAAAAAAGo/AwNLwL9FtDg6mjulNY7VRmg72Y82SlAcA/w1200-h630-p-k-no-nu/night_elf_shadow_priest_by_le0face-d7i6tt6.jpg",
        "https://pre00.deviantart.net/a16b/th/pre/f/2011/250/b/4/blood_elf_spriest_in_t5_by_iidxgirl-d497p9e.jpg",
        "https://img00.deviantart.net/f544/i/2017/154/7/6/cinnabun_and_cinnamini_by_skirtzzz-dbbdcyn.png",
        "https://pre00.deviantart.net/0cd5/th/pre/f/2015/270/b/0/cal_freakout_by_hazelgee-d9b3oat.jpg",
        "https://pre00.deviantart.net/8e1f/th/pre/i/2017/247/9/5/shadow_priest_by_ammatice-dbmdzko.png",
        "https://orig00.deviantart.net/bcdb/f/2018/004/a/5/void_elf_by_oxanta-dbyw3uv.jpg",
        "https://pre00.deviantart.net/633e/th/pre/i/2018/007/d/b/void_elf_sketch_by_zaelii_jay-dbza2vu.jpg",
        "https://cdn.discordapp.com/attachments/311633413805441024/442029641566388225/sacred_by_angevere-d3a7q5l.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442036763767078942/2b253fa0b421db0865ddb38a163c8e3e.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039919930638336/tumblr_otenirrwI21rtzcgdo1_1280.png",
    ],
    "shadow priest draenei female": [
        "https://pre00.deviantart.net/d68c/th/pre/i/2014/271/5/e/shadow_priest_by_serraarc-d80t8qh.jpg",
        "http://img0.reactor.cc/pics/post/full/World-of-Warcraft-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B5-priest-1556278.jpeg",
        "https://orig00.deviantart.net/159c/f/2016/103/e/e/hearthstone___embrace_the_shadow_by_rzanchetin-d9ysj4b.png",
        "https://pre00.deviantart.net/db2f/th/pre/f/2018/100/5/9/darahja_by_hobo_cat-dc8d2tu.png",
        "https://img00.deviantart.net/e925/i/2017/252/3/8/draenei_shadow_priest_by_zaelii_jay-dbmx4gu.jpg",
        "https://img00.deviantart.net/84a5/i/2012/355/6/f/lyis___shadow_priest_by_sboddah-d5okogt.jpg",
        "https://i.pinimg.com/originals/3f/dd/ae/3fddae105b734fb18b964e2ba58fe875.jpg",
        "https://img00.deviantart.net/84a5/i/2012/355/6/f/lyis___shadow_priest_by_sboddah-d5okogt.jpg",
        "https://img00.deviantart.net/a0f1/i/2018/082/0/a/___commission__draenei_shadow_priest_ii____by_shadowpriest-dc6p743.png",
        "https://pre00.deviantart.net/db2f/th/pre/f/2018/100/5/9/darahja_by_hobo_cat-dc8d2tu.png",
        "https://pre00.deviantart.net/f042/th/pre/i/2018/065/0/2/mystery_by_ammatice-dc557n9.png",
        "https://pre00.deviantart.net/9d1d/th/pre/i/2018/113/2/0/joholri___sass_by_windpawzz-dc5gr2t.png",
        "https://pre00.deviantart.net/04b4/th/pre/i/2017/213/c/f/draenei_ii_by_ammatice-dbihwl5.png",
        "https://pre00.deviantart.net/d297/th/pre/i/2017/045/1/0/yaala_by_kaiyela-daz1m4i.jpg",
        "https://img00.deviantart.net/e925/i/2017/252/3/8/draenei_shadow_priest_by_zaelii_jay-dbmx4gu.jpg",
        "https://cdn.discordapp.com/attachments/311633413805441024/441799039562940419/RbG22zao74o.jpg",
    ],
    "priest female": [
        "https://i.pinimg.com/originals/67/ad/65/67ad65a003b4a9c9a42af19997c6f01e.jpg",
        "https://orig00.deviantart.net/2c04/f/2012/262/9/5/wow___bloodelf_priest_by_jorsch-d5f94bd.jpg",
        "https://img00.deviantart.net/1f0b/i/2010/159/9/a/nightelf_by_shuzong.jpg",
        "https://vignette.wikia.nocookie.net/wow/images/8/86/EssenceOfMending.jpg/revision/latest?cb=20131124110310&path-prefix=ru",
        "http://www.blizz-art.com/illustrations/14/sgztp93amsmva8bek99c.jpg",
        "https://pre00.deviantart.net/d23b/th/pre/f/2018/062/b/7/030418_by_lowly_owly-dc4ujo4.jpg",
        "https://pp.userapi.com/c626428/v626428675/5026/UqOVCHwrs8g.jpg",
        "https://orig00.deviantart.net/1157/f/2010/110/e/d/edefce1c0d426ede2af24a1b9f0b557a.jpg",
        "https://img00.deviantart.net/d578/i/2018/097/2/5/female_priest___priestess___by_straban-dc85pn4.jpg",
        "https://img00.deviantart.net/985e/i/2015/171/6/e/pandaren_priest_by_aquarelka-d8y11iy.jpg",
        "https://img00.deviantart.net/8d6e/i/2016/363/0/5/_comm__shadowpriest_wallpaper_by_feh_rodrigues-daprvzt.jpg",
        "https://orig00.deviantart.net/b35c/f/2012/173/c/e/shadowy_apparition_by_alexgarner-d54fstw.jpg",
        "https://orig00.deviantart.net/f388/f/2008/049/1/a/wow__i_am_not_a_healer_by_karniz.png",
        "https://img00.deviantart.net/0572/i/2015/218/8/8/esseker___holy_priest_by_saurro-d890q4a.png",
        "https://pre00.deviantart.net/769f/th/pre/f/2017/076/a/0/draenei_priest_by_raxellia-db2ncs5.png",
        "https://pre00.deviantart.net/69f1/th/pre/i/2017/192/8/1/draenei_priest_faeb_by_faebelina-dbfxdza.png",
        "https://pre00.deviantart.net/6e82/th/pre/f/2011/242/5/e/dranei_priest_in_t6_by_iidxgirl-d48b8qs.jpg",
        "https://pre00.deviantart.net/f6a7/th/pre/f/2016/075/2/a/kalith_by_lockjaw-d9vdfbk.jpg",
        "https://orig00.deviantart.net/9ee1/f/2017/275/4/2/priest_by_namwhan_k-dbp9n8s.jpg",
        "https://pre00.deviantart.net/b53d/th/pre/f/2010/062/0/1/draenei_priest_wallpaper_by_cazylein.jpg",
        "https://orig00.deviantart.net/1157/f/2010/110/e/d/edefce1c0d426ede2af24a1b9f0b557a.jpg",
        "https://orig00.deviantart.net/041d/f/2008/110/5/6/rez_plz_by_zazb.jpg",
        "http://images.mmosite.com/my/upload/31/26/67a9619c3ba25982ae5b02a68b9f7ce2/theme/5136be27ed05bfe970ee6a6235736593932.jpg",
        "http://images.mmosite.com/my/upload/31/26/67a9619c3ba25982ae5b02a68b9f7ce2/theme/56d08979ee5810c0390d1b9210e1d02e117.jpg",
        "http://images.mmosite.com/my/upload/31/26/67a9619c3ba25982ae5b02a68b9f7ce2/theme/3c504ccbcea864b8f8e8099ab13fa6fa885.jpg",
        "http://images.mmosite.com/my/upload/31/26/67a9619c3ba25982ae5b02a68b9f7ce2/theme/6fdb0880c68d62a0e0075ad98f894704318.jpg",
        "https://pre00.deviantart.net/fbf6/th/pre/f/2015/147/6/8/worgen_shadow_priest_by_hodiaa-d8uz8st.jpg",
        "https://scontent-sea1-1.cdninstagram.com/vp/0c459e555ace409c29024907e1eff8cb/5B408F0F/t51.2885-15/s480x480/e15/10755849_400937223389495_195296171_n.jpg?ig_cache_key=ODUxNDMyNTk1Mzc4MTY2MDU2.2",
        "https://cdn.discordapp.com/attachments/311633413805441024/442027627465670666/flameslinger_zara_and_zaza__jun_by_alexgarner-d4ke1hz.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442028586166124555/2009_03_27__zul__drak_by_hikari_chan.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442028740176904203/commission___licania_by_nadou.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442029641566388225/sacred_by_angevere-d3a7q5l.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442029908492025866/lights_in_the_fire_by_linxz2010-d41w2g1.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442030137786236948/tmb_78608_5620.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442031606803202049/xi9d2ehxli901.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442033167868887053/worgen_shadow_priest_by_hodiaa-d8uz8st.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442034025591209984/d88b9b142ad3649d2bb92a733a6ad1bf.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442034325009989632/W15_A066small.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442034771204505610/wallpaper2you_516239.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442034817723531265/wallpaper2you_516246.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442034938192068608/wallpaper2you_516278.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442035041225277477/wallpaper2you_516233.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442036427627167754/commission__pandaren_priest_by_lowly_owly-d9vbkyo.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442036477657088010/gnome_priest___world_of_warcraft_by_muju-daehtgt.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442036627066454018/cc0e64960fab7bfb6769420113e523be.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442036763767078942/2b253fa0b421db0865ddb38a163c8e3e.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442037765811470366/fanart-1201-full.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442038967110598676/tumblr_osbfo6ZLTf1rtzcgdo1_500.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039024035823616/tumblr_oze3bcFcba1spneoyo1_r2_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039062279225374/tumblr_ovyr9w7hdc1s05bj1o1_r1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039485274914826/tumblr_p2p3fcViP11r0ab8ho1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039919930638336/tumblr_otenirrwI21rtzcgdo1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442041006712553473/tumblr_nhukdtYCLY1rstfxvo1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442041080628772875/tumblr_nlfnzjiliP1tliclwo1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442041120688701441/tumblr_ntg3d4z6Gi1qcy5svo1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442041174866264064/tumblr_o1bwbdxc1v1uxpsfyo1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442041292348719104/tumblr_o0lc7exT8H1tliclwo1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442043969191411742/tumblr_p10o0eZf9m1rssh27o1_1280.png",
    ],
    "priest male": [
        "https://i.pinimg.com/originals/a3/c7/25/a3c7255314847d2f1e36e866d77d9c8f.jpg",
        "https://orig00.deviantart.net/7089/f/2009/037/7/d/troll_priest_by_davidrapozaart.jpg",
        "https://pre00.deviantart.net/5bc7/th/pre/f/2015/308/9/f/light_and_shadow_by_angju-d9fhsjg.jpg",
        "https://scontent-sea1-1.cdninstagram.com/vp/44a2d8d79f099a0c6c2489eb1cdcbd0d/5B163F8C/t51.2885-15/s480x480/e15/10475212_568301359982705_1663647025_n.jpg?ig_cache_key=ODUyMjIxODQ1ODgzMzQ1MjY5.2",
        "https://static.wikia.nocookie.net/128bdfca-3e87-476d-9b92-fbdd4aab1140/zoom-crop/width/525/height/295",
        "http://mmo-faq.ru/images/shprist.jpg",
        "https://pre00.deviantart.net/5f3d/th/pre/i/2010/286/7/3/draenei_priest_by_ederoi-d30pdao.jpg",
        "https://img00.deviantart.net/4317/i/2013/126/9/1/__see_the_light___by_alimika-d64aoid.png",
        "https://pre00.deviantart.net/82f1/th/pre/i/2013/075/d/d/shadow_word__devour_by_kerembeyit-d5wv5nv.jpg",
        "https://img00.deviantart.net/6623/i/2011/325/6/c/gnome_dude_by_rogierb-d4gk6i9.jpg",
        "https://fc08.deviantart.net/fs35/f/2008/302/e/7/Raegx___Undead_Priest_by_jezebel.jpg",
        "https://img00.deviantart.net/51ce/i/2016/142/4/c/high_warlord_shadowpriest__by_wildjade-da3ek6h.jpg",
        "https://img00.deviantart.net/b885/i/2017/019/b/9/wow_shadow_priest_by_aianeart-davy7nn.jpg",
        "https://pbs.twimg.com/media/DFYxzUOXUAIk-il.jpg",
        "https://cdn.discordapp.com/attachments/311633413805441024/442032621992542218/DFYxzUOXUAIk-il.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442032755581124619/tumblr_njhoxySHSk1rvrnlfo1_500.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442033351453310976/nina-ward-worgen-shadow-priest-smaller-still.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442033918376673290/5314b5721a8f44df7267a70af99f17ea--world-of-warcraft-account-the-werewolf.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442037163060756480/wow_gnomepriest.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442037284888379422/goblin_preist_by_benwootten-d3fz3ac.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442038848491618355/tumblr_oq2fy9vkhP1s28dwdo1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039240751054858/tumblr_p2xbuwFhmM1wj8b3fo1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039308275417109/tumblr_ou6iexa87s1w1o9b2o1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039450684489738/tumblr_p6egorHzYx1vjc17uo1_540.png",
    ],
    "troll male": [
        "https://i.pinimg.com/originals/5b/7d/36/5b7d36eec98ef53ea165791aab42310a.jpg",
        "https://i.pinimg.com/736x/77/1c/dd/771cddf1c453e422303c37e1ad024622--horde-fantasy-creatures.jpg",
        "https://pre00.deviantart.net/9184/th/pre/i/2015/174/e/5/troll_headhunter_by_samarskiy-d8170k2.jpg",
        "http://i46.servimg.com/u/f46/17/66/80/03/world-17.jpg",
        "https://i.ytimg.com/vi/1j-MWfYekQA/maxresdefault.jpg",
        "https://orig00.deviantart.net/acf4/f/2008/068/f/2/nachtar_by_jezebel.jpg",
        "https://pre00.deviantart.net/6a74/th/pre/f/2015/134/f/f/wow__troll_hoodie_sketch_by_ryumo-d8tbbyi.jpg",
        "https://img00.deviantart.net/8262/i/2012/162/9/f/troll_of_wow_by_baba_gaga-d5323c5.jpg",
        "https://orig00.deviantart.net/2c72/f/2015/097/d/0/wow__troll_by_eleweth-d8osd9q.png",
        "https://i.pinimg.com/originals/db/f1/22/dbf1221539b76c430cb889325c00b30e.jpg",
        "https://i.pinimg.com/736x/ef/ba/17/efba1773f054ba2ede78bdd42c3c8923--character-art-character-design.jpg",
        "https://i.pinimg.com/originals/56/f5/bf/56f5bf0463aa3f7c8df0dbae05f0aa0a.jpg",
        "https://78.media.tumblr.com/2f2b6e691645e2a1acb9ec94cfc41f51/tumblr_nr0pe5Dxum1szbq6vo1_500.jpg",
        "https://cdn.discordapp.com/attachments/311633413805441024/442027240616755211/yana__mi_by_nightblue_art-d4cn3q9.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039565323206666/tumblr_om92ibXHY91sn5rk8o1_1280.png",
        "https://i.pinimg.com/originals/40/46/65/404665c90ba9c140a314a6d049572133.jpg",
        "https://pre00.deviantart.net/a4ac/th/pre/i/2011/217/7/9/troll_priest_tier_5_by_tr1ff1d-d45jang.jpg",
        "https://cdn.discordapp.com/attachments/311633413805441024/442024703742443520/troll_powah_by_haxorran.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442025196069847051/troll_priest_by_davidrapozaart.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442025582805516288/W13-A017-Troll-Female-Priest-Jonboy-low-res.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442027627465670666/flameslinger_zara_and_zaza__jun_by_alexgarner-d4ke1hz.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442045322978394122/tumblr_p6bjcu5xsS1ur2ohxo2_1280.png",
    ],
    "": [
        "https://img00.deviantart.net/cd97/i/2018/047/8/2/___nightborne_warrior____by_shadowpriest-dc2fv0p.jpg",
        "https://pre00.deviantart.net/f3c6/th/pre/f/2014/258/2/9/anzu_the_raven_lord_by_saurro-d7z45od.png",
        "https://pre00.deviantart.net/806d/th/pre/i/2016/002/8/9/night_song_by_tamplierpainter-d9mhk8v.jpg",
        "https://pre00.deviantart.net/be41/th/pre/i/2015/308/d/e/the_burning_rage_by_tamplierpainter-d9fhuf9.jpg",
        "https://pre00.deviantart.net/9bb6/th/pre/i/2015/232/b/1/jaina___the_shattered_soul_by_tamplierpainter-d96fhpa.jpg",
        "https://pre00.deviantart.net/530c/th/pre/i/2011/225/2/2/jaina_proudmoore_by_tamplierpainter-d46e6ke.jpg",
        "https://pre00.deviantart.net/b483/th/pre/f/2011/279/3/e/blood_elf___mage_by_tamplierpainter-d4c22rh.jpg",
        "https://pre00.deviantart.net/0ab7/th/pre/i/2012/161/7/a/shandris_feathermoon_by_tamplierpainter-d52y6sy.jpg",
        "https://img00.deviantart.net/ca8d/i/2011/078/0/0/garrosh_hellscream_by_tamplierpainter-d3bypro.jpg",
        "https://img00.deviantart.net/8bef/i/2011/183/6/2/ragnaros_by_tamplierpainter-d3kqfht.jpg",
        "https://img00.deviantart.net/1e7c/i/2011/208/0/2/flame_druid_by_breathing2004-d41t793.jpg",
        "https://orig00.deviantart.net/459c/f/2011/104/2/8/assassin__s_game_by_mr__jack-d3e0pdq.jpg",
        "https://orig00.deviantart.net/0122/f/2010/074/e/a/ea7c65d32be463c58bcc12322536be8d.jpg",
        "https://orig00.deviantart.net/05b9/f/2010/101/4/4/44da7d07160e91bfcd335186d3c6010f.jpg",
        "https://orig00.deviantart.net/416e/f/2010/066/e/3/e3654ac12cae2f8ece300bc4f41e274c.jpg",
        "https://img00.deviantart.net/7025/i/2016/093/3/9/tyrande__the_high_priestess_of_elune_by_the_unilluminated-d9qxhx7.jpg",
        "https://pre00.deviantart.net/f84a/th/pre/i/2017/324/b/b/druid_by_ammatice-dbucd8k.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442027627465670666/flameslinger_zara_and_zaza__jun_by_alexgarner-d4ke1hz.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442031867525464094/cherlin-mao-alleriawindrunnervoid9.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442037517433438211/worgen_druid_by_sandara-dbrj2x0.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442038027259215872/1504293870.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039062279225374/tumblr_ovyr9w7hdc1s05bj1o1_r1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039754947690511/wallpaper2you_358790.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442040748209209344/Pandaren-Shaman_Scratch-281024w29.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442043162995982364/tumblr_p10kydhsWF1w0pvz5o1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442043598029193216/tumblr_p473l91WCR1w0pvz5o1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442044394682580992/tumblr_p3p3q5Ypha1wshlpyo1_1280.png",
    ],
    "draenei female": [
        "https://i.pinimg.com/originals/eb/0c/f7/eb0cf7d6de02f8515ca98b30af7343bb.jpg",
        "https://vignette.wikia.nocookie.net/wh40k-fanon/images/e/ee/Esharii.jpg/revision/latest?cb=20160324121626&path-prefix=pl",
        "https://i.pinimg.com/originals/b9/1e/0f/b91e0f13c59cdd3223719a7c6496b5a4.jpg",
        "https://i.pinimg.com/736x/a8/44/f4/a844f47cc2e197b7e08dd6e000d0b54e--character-art-character-design.jpg",
        "https://i.pinimg.com/originals/e6/8b/08/e68b08d33f068f51ab8ba04c9f6d0b9c.jpg",
        "https://pre00.deviantart.net/1462/th/pre/f/2016/234/1/1/warrior___world_of_warcraft_by_wlop-daefvr0.jpg",
        "https://i.pinimg.com/originals/01/e5/0c/01e50ca5b75aaafc5eb9c0a75a9059f6.jpg",
        "https://i.pinimg.com/736x/f7/26/95/f72695cfa20f6594bc6258ec3bba0771--warcraft-art-world-of-warcraft.jpg",
        "https://i.pinimg.com/originals/93/d5/ff/93d5ff32fe3a7eb22082bba75be54831.jpg",
        "https://i.pinimg.com/736x/7b/73/40/7b7340516c3fce70ab674a4b9c1a7be6--warcraft-art-world-of-warcraft.jpg",
        "https://pre00.deviantart.net/9b76/th/pre/f/2010/308/1/3/warcraft___loraala_by_genzoman-d325izr.jpg",
        "https://i.pinimg.com/736x/dc/8a/9e/dc8a9e8824c97963fbfdc428441130f8--draenei-paladin-world-of-warcraft.jpg",
        "https://pre00.deviantart.net/3ea3/th/pre/i/2017/288/7/c/sha_nir_by_dhaia-dbqp12y.jpg",
        "https://pre00.deviantart.net/fd2a/th/pre/i/2017/213/6/2/draenei_by_ikbeneenkat-dbiio7o.jpg",
        "https://img00.deviantart.net/5bb4/i/2017/269/0/7/outono_by_eithniel-dboom7f.png",
        "https://orig00.deviantart.net/0f2b/f/2017/288/e/9/vestae_by_the0utlander-dbqnv7n.jpg",
        "https://pre00.deviantart.net/f2ab/th/pre/i/2018/120/1/a/draenei_by_zaelii_jay-dcaa4ht.jpg",
        "https://img00.deviantart.net/9068/i/2018/055/4/f/022418_by_lowly_owly-dc45d7l.jpg",
        "https://pre00.deviantart.net/b4a0/th/pre/i/2018/038/d/4/faneeya_by_junejenssen-dc2heko.jpg",
        "https://pre00.deviantart.net/c33d/th/pre/i/2018/007/e/3/lightforged_draenei_sketch_by_zaelii_jay-dbza3jo.jpg",
        "https://img00.deviantart.net/8153/i/2009/124/9/2/dyah___relentless_by_thefirstangel.jpg",
        "https://pre00.deviantart.net/75a2/th/pre/i/2014/310/f/b/draenai_by_reddragonamy-d85gmxd.jpg",
        "https://img00.deviantart.net/c7f8/i/2017/365/c/5/the_tattoo_by_faebelina-dbyft85.png",
        "https://pre00.deviantart.net/d5b5/th/pre/i/2017/342/3/7/kivaa__lightforged_draenei__by_faebelina-dbw44en.png",
        "https://pre00.deviantart.net/b9ff/th/pre/f/2017/315/b/1/vysscommsmol_by_amberharrisart-dbth7cg.png",
        "https://pre00.deviantart.net/029c/th/pre/i/2017/304/1/0/zenalira__gift__by_luminaena-dbsatwh.png",
        "https://pre00.deviantart.net/6e82/th/pre/f/2011/242/5/e/dranei_priest_in_t6_by_iidxgirl-d48b8qs.jpg",
        "https://pre00.deviantart.net/b53d/th/pre/f/2010/062/0/1/draenei_priest_wallpaper_by_cazylein.jpg",
        "https://orig00.deviantart.net/1157/f/2010/110/e/d/edefce1c0d426ede2af24a1b9f0b557a.jpg",
        "https://cdn.discordapp.com/attachments/311633413805441024/442039110836944907/tumblr_oye695KguR1umq1k6o1_1280.png",
    ],
    "troll female": [
        "https://i.pinimg.com/originals/40/46/65/404665c90ba9c140a314a6d049572133.jpg",
        "https://pre00.deviantart.net/a4ac/th/pre/i/2011/217/7/9/troll_priest_tier_5_by_tr1ff1d-d45jang.jpg",
        "https://cdn.discordapp.com/attachments/311633413805441024/442024703742443520/troll_powah_by_haxorran.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442025196069847051/troll_priest_by_davidrapozaart.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442025582805516288/W13-A017-Troll-Female-Priest-Jonboy-low-res.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442027240616755211/yana__mi_by_nightblue_art-d4cn3q9.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442027627465670666/flameslinger_zara_and_zaza__jun_by_alexgarner-d4ke1hz.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442045322978394122/tumblr_p6bjcu5xsS1ur2ohxo2_1280.png",
    ],
    "worgen": [
        "https://cdn.discordapp.com/attachments/311633413805441024/442032621992542218/DFYxzUOXUAIk-il.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442032755581124619/tumblr_njhoxySHSk1rvrnlfo1_500.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442033167868887053/worgen_shadow_priest_by_hodiaa-d8uz8st.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442033351453310976/nina-ward-worgen-shadow-priest-smaller-still.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442033918376673290/5314b5721a8f44df7267a70af99f17ea--world-of-warcraft-account-the-werewolf.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442034025591209984/d88b9b142ad3649d2bb92a733a6ad1bf.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442034325009989632/W15_A066small.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442034771204505610/wallpaper2you_516239.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442037517433438211/worgen_druid_by_sandara-dbrj2x0.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442038027259215872/1504293870.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442043046885064724/tumblr_ox9lqeHsRK1uvpg0do1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442043127184752640/tumblr_p17z2yqwOK1uvpg0do1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442043598029193216/tumblr_p473l91WCR1w0pvz5o1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442043969191411742/tumblr_p10o0eZf9m1rssh27o1_1280.png",
        "https://cdn.discordapp.com/attachments/311633413805441024/442044039001276426/tumblr_og4ozrtkbh1rn2mwlo1_1280.png",

    ]
};

class StaticImageRepository {
    getRandomImageByTag(tagList) {
        return new Promise((resolve, reject) => {
            if (!images.hasOwnProperty(tagList)) {
                reject(new ImageRepositoryError("Не могу найти таких картинок :(", true));
            }

            let repository = images[tagList];
            if (repository.length === 0) {
                reject(new ImageRepositoryError("Не могу найти таких картинок :(", true));
            }

            let i = Math.floor(Math.random() * repository.length);
            resolve(repository[i]);
        });
    }
}

module.exports = StaticImageRepository;