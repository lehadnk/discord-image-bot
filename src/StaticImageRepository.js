const ImageRepositoryError = require("./ImageRepositoryError");

let images = {
    "shadow priest elf female": [
        "https://pre00.deviantart.net/d68c/th/pre/i/2014/271/5/e/shadow_priest_by_serraarc-d80t8qh.jpg",
        "https://pre00.deviantart.net/62d2/th/pre/i/2017/018/9/6/lottery__shadow_priest_by_masta_shivo-davvnxo.jpg",
        "https://pre00.deviantart.net/5987/th/pre/i/2018/108/0/d/shadow_priest_by_antheiavaulor-dc962hq.jpg",
        "https://pre00.deviantart.net/0cd5/th/pre/f/2015/270/b/0/cal_freakout_by_hazelgee-d9b3oat.jpg",
        "https://www.selectgame.com.br/wp-content/uploads/2016/10/Hearthstone-Tyrande-Murmur%C3%A9olo-Index.jpg",
        "https://78.media.tumblr.com/f1cb2cc23cb736bbd944196d250c06d3/tumblr_p4okyhmbbh1usu64fo1_r1_500.jpg",
        "http://orig12.deviantart.net/452a/f/2013/279/5/9/nightelf_shadow_priest_by_moaningbird-d6pivpp.jpg",
        "https://orig00.deviantart.net/8021/f/2010/275/5/8/belf_shadow_priest_speedpaint_by_renonvesir-d2zxzck.jpg",
        "https://pre00.deviantart.net/a0b2/th/pre/f/2014/224/f/5/blood_elf___hekathi_cathubodua_by_nemhainn-d7utmy0.jpg",
        "https://1.bp.blogspot.com/-fBxeweEqE3A/Vvo3o_2RRtI/AAAAAAAAAGo/AwNLwL9FtDg6mjulNY7VRmg72Y82SlAcA/w1200-h630-p-k-no-nu/night_elf_shadow_priest_by_le0face-d7i6tt6.jpg",
        "https://pre00.deviantart.net/a16b/th/pre/f/2011/250/b/4/blood_elf_spriest_in_t5_by_iidxgirl-d497p9e.jpg"
    ],
    "shadow priest draenei female": [
        "http://img0.reactor.cc/pics/post/full/World-of-Warcraft-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B5-priest-1556278.jpeg",
        "https://orig00.deviantart.net/159c/f/2016/103/e/e/hearthstone___embrace_the_shadow_by_rzanchetin-d9ysj4b.png",
        "https://pre00.deviantart.net/db2f/th/pre/f/2018/100/5/9/darahja_by_hobo_cat-dc8d2tu.png",
        "https://img00.deviantart.net/e925/i/2017/252/3/8/draenei_shadow_priest_by_zaelii_jay-dbmx4gu.jpg",
        "https://img00.deviantart.net/84a5/i/2012/355/6/f/lyis___shadow_priest_by_sboddah-d5okogt.jpg",
        "https://i.pinimg.com/originals/3f/dd/ae/3fddae105b734fb18b964e2ba58fe875.jpg"
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
        "https://img00.deviantart.net/985e/i/2015/171/6/e/pandaren_priest_by_aquarelka-d8y11iy.jpg"
    ],
    "priest male": [
        "https://i.pinimg.com/originals/a3/c7/25/a3c7255314847d2f1e36e866d77d9c8f.jpg",
        "https://orig00.deviantart.net/7089/f/2009/037/7/d/troll_priest_by_davidrapozaart.jpg",
        "https://pre00.deviantart.net/5bc7/th/pre/f/2015/308/9/f/light_and_shadow_by_angju-d9fhsjg.jpg",
        "https://scontent-sea1-1.cdninstagram.com/vp/44a2d8d79f099a0c6c2489eb1cdcbd0d/5B163F8C/t51.2885-15/s480x480/e15/10475212_568301359982705_1663647025_n.jpg?ig_cache_key=ODUyMjIxODQ1ODgzMzQ1MjY5.2",
        "https://static.wikia.nocookie.net/128bdfca-3e87-476d-9b92-fbdd4aab1140/zoom-crop/width/525/height/295",
        "http://mmo-faq.ru/images/shprist.jpg"
    ],
    "troll": [
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
        "https://78.media.tumblr.com/2f2b6e691645e2a1acb9ec94cfc41f51/tumblr_nr0pe5Dxum1szbq6vo1_500.jpg"
    ],
    "": [

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
        "https://i.pinimg.com/736x/dc/8a/9e/dc8a9e8824c97963fbfdc428441130f8--draenei-paladin-world-of-warcraft.jpg"
    ]
}

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