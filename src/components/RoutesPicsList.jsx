import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function RoutesPicsList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://ilamdir.org/blobs/ilamdir/w300h300-cropped/328/2020/31/convento-santo-domingo.jpg',
    title: 'Santo Domingo',
  },
  {
    img: 'http://www.guiadeviajesperu.com/wp-content/uploads/2019/12/iglesia-lima.jpg',
    title: 'San Francisco',
  },
  {
    img: 'https://refrinoticias.com/wp-content/uploads/2015/10/19218687251489261498172492.jpg',
    title: 'Catedral de Lima',
  },
  {
    img: 'https://freewalkingtoursperu.com/wp-content/uploads/2020/10/iglesia-la-merced-lima-centro-historico.jpg',
    title: 'La Merced',
  },
  {
    img: 'https://s.ruta0.net/cache/img680/12651.jpg',
    title: 'Virgen Milagrosa',
  },
  {
    img: 'http://www.guiadeviajesperu.com/wp-content/uploads/2019/12/iglesia-lima-3.jpg',
    title: 'Las Nazarenas',
  },
  {
    img: 'https://lexlatin.com/sites/default/files/catedral_senora_del_pilar_lima_peru.jpg',
    title: 'Virgen del Pilar',
  },
]