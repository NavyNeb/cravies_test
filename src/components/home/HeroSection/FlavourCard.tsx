import React from 'react'
import { Card, CardContent, CardFooter } from '../../ui/card'
import { useNavigate } from 'react-router-dom'

type Props = {
    id: number
    name: string
    color: string
    image: string
}

const FlavourCard: React.FC<Props> = ({ name, color, image }) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/product-details/`)} style={{ backgroundColor: color, cursor: 'pointer' }} >
        <CardContent>
            <img src={image} alt="flavour" className="w-full flex-1 object-cover" />
        </CardContent>
        <CardFooter className='flex items-center justify-center' >
            <h5 className="text-3xl text-center font-wosker line-clamp-2 text-white sm:w-1/2">{name}</h5>
        </CardFooter>
    </Card>
  )
}

export default FlavourCard