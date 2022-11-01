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
    img: 'https://res.cloudinary.com/dad5dandd/image/upload/v1667343357/NFTourism%20Assets/religiousRoutes/santoDomingo_tioh25.jpg',
    title: 'Santo Domingo',
  },
  {
    img: 'https://res.cloudinary.com/dad5dandd/image/upload/v1667343359/NFTourism%20Assets/religiousRoutes/sanFrancisco_tg5mdp.jpg',
    title: 'San Francisco',
  },
  {
    img: 'https://res.cloudinary.com/dad5dandd/image/upload/v1667343357/NFTourism%20Assets/religiousRoutes/catedralLima_u0ed7p.jpg',
    title: 'Catedral de Lima',
  },
  {
    img: 'https://res.cloudinary.com/dad5dandd/image/upload/v1667343357/NFTourism%20Assets/religiousRoutes/laMerced_o179mz.jpg',
    title: 'La Merced',
  },
  {
    img: 'https://res.cloudinary.com/dad5dandd/image/upload/v1667343357/NFTourism%20Assets/religiousRoutes/virgenMilagrosa_mucmbs.jpg',
    title: 'Virgen Milagrosa',
  },
  {
    img: 'https://res.cloudinary.com/dad5dandd/image/upload/v1667343358/NFTourism%20Assets/religiousRoutes/nazarenas_zhpxrx.jpg',
    title: 'Las Nazarenas',
  },
  {
    img: 'https://res.cloudinary.com/dad5dandd/image/upload/v1667343358/NFTourism%20Assets/religiousRoutes/virgenPilar_nplu7b.jpg',
    title: 'Virgen del Pilar',
  },
]