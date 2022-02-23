import { Component } from '@angular/core';
import { Artist } from './interfaces/Artist';
import { Mark } from './interfaces/Mark';
import { Song } from './interfaces/Song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hot Tunes';

  yonaguni: Song = {
    name: "Yonaguni",
    gender: "Reggaeton",
    imageUrl: "https://i.etsystatic.com/26268574/r/il/d36cd4/3137334446/il_fullxfull.3137334446_nuvf.jpg",
    stars: 3.5
  };

  aTuMerced: Song = {
    name: "A tu merced",
    gender: "Reggaeton",
    imageUrl: "https://images.genius.com/1c5b5ca188e94a378b56f5989f07fc89.740x740x1.png",
    stars: 4.5
  };

  dakiti: Song = {
    name: "Dakiti",
    gender: "Reggaeton",
    imageUrl: "https://hypeddit-gates-prod.s3.amazonaws.com/5jzhm7_coverartmanual",
    stars: 3.7
  };

  tamoEnHoja: Song = {
    name: "Tamo en hoja",
    gender: "Dembow",
    imageUrl: "https://3.bp.blogspot.com/-EyyE45sGTuo/XynqcXOCYYI/AAAAAAAAFyY/Kv06jbWb2AUIe48DyciKRGpIXl_rh6hkACLcBGAsYHQ/s1600/El%2BAndroide%2B-%2BAlbum-600-cover.jpg",
    stars: 4.7
  };

  esteTemaMaste: Song = {
    name: "Este tema maste",
    gender: "Dembow",
    imageUrl: "https://fuleteo.vip/wp-content/uploads/2021/12/este-tema-maste-fuleteopro.jpg",
    stars: 3.5
  };

  coronao: Song = {
    name: "Coronao",
    gender: "Dembow",
    imageUrl: "http://urfavoritemusic.com/wp-content/uploads/2019/11/Coronao-Now.jpg",
    stars: 3.5
  };

  ensenameAOlvidar: Song = {
    name: "Enseñame a olvidar",
    gender: "Bachata",
    imageUrl: "https://s.mxmcdn.net/images-storage/albums/8/8/0/4/3/7/26734088_800_800.jpg",
    stars: 4.5
  };

  obsesion: Song = {
    name: "Obsesión",
    gender: "Bachata",
    imageUrl: "https://img.discogs.com/qZuK2pYL5AjGvQHyNcwD-T5nd-Q=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-870789-1393915706-1559.jpeg.jpg",
    stars: 3.9
  };

  dileAlAmor: Song = {
    name: "Dile al amor",
    gender: "Bachata",
    imageUrl: "https://i1.sndcdn.com/artworks-000003373854-h51ts7-t500x500.jpg",
    stars: 3.4
  };

  idilio: Song = {
    name: "Idilio",
    gender: "Salsa",
    imageUrl: "http://www.music-bazaar.com/album-images/vol2/130/130313/757607-big/Idilio-cover.jpg",
    stars: 5
  };

  elGranVaron: Song = {
    name: "El gran varón",
    gender: "Salsa",
    imageUrl: "http://images.genius.com/3bf8088623741687fb92272c2d6fcea5.953x953x1.jpg",
    stars: 4.8
  };

  juanitoAlimana: Song = {
    name: "Juanito Alimaña",
    gender: "Salsa",
    imageUrl: "https://http2.mlstatic.com/D_Q_NP_464315-MLM25239460251_122016-Q.jpg",
    stars: 5
  };


  markArray: Mark[] = [
    {
      name: "Coca-Cola",
      url: "https://www.nexpressdelivery.co.uk/img/product/main_697_cokecanpng.png",
      value: 1.5
    },
    {
      name: "Pepsi",
      url: "https://i5.walmartimages.com/asr/42393b45-4427-41dd-b36c-7f69adb53834_1.e90c2ecc295e7bf7b28e02235461a527.jpeg",
      value: 1
    },
    {
      name: "Fiora-Vanti",
      url: "http://www.canmuseum.com/Staging/Images/Cans/60312.jpg",
      value: 0.75
    },
  ];


  artists: Artist[] = [
    {
      name: "Bad Bunny",
      imageUrl: "https://static.billboard.com/files/media/bad-bunny-press-new-2019-billboard-1548-compressed.jpg",
      songs: [
        this.yonaguni,
        this.aTuMerced,
        this.dakiti,
      ]
    },
    {
      name: "El Alfa",
      imageUrl: "http://www.kariculture.net/wp-content/uploads/2019/04/EL-ALFA.jpeg",
      songs: [
        this.tamoEnHoja,
        this.esteTemaMaste,
        this.coronao,
      ]
    },
    {
      name: "Aventura",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vPJQVhjCti5GHHMs49W01wHaEK%26pid%3DApi&f=1",
      songs: [
        this.ensenameAOlvidar,
        this.obsesion,
        this.dileAlAmor,
      ]
    },
    {
      name: "Willie Colón",
      imageUrl: "http://endorfinacultural.com/wp-content/uploads/2017/10/WILLIE-COLON-PIC1.jpg",
      songs: [
        this.idilio,
        this.elGranVaron,
        this.juanitoAlimana,
      ]
    },
  ];


  songs: Song[] = [
    this.yonaguni,
    this.aTuMerced,
    this.dakiti,

    this.tamoEnHoja,
    this.esteTemaMaste,
    this.coronao,

    this.ensenameAOlvidar,
    this.obsesion,
    this.dileAlAmor,

    this.idilio,
    this.juanitoAlimana,
  ];
}
