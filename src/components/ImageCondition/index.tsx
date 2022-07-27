import Image from 'next/image'
import styled from 'styled-components'

interface imageConditionRenderProps {
  [key: string]: React.ReactNode
}

interface testProps {
  condition: string
}

export function imageConditionRender({
  condition
}: testProps): React.ReactNode {
  const Images: imageConditionRenderProps = {
    'Céu limpo': (
      <Image src="/sun.svg" width="47" height="30" alt="Wheater Icon" />
    ),
    'Poucas nuvens': (
      <Image
        src="/scatteredClouds.svg"
        width="47"
        height="30"
        alt="Wheater Icon"
      />
    ),
    'Nuvens dispersas': (
      <Image
        src="/scatteredClouds.svg"
        width="47"
        height="30"
        alt="Wheater Icon"
      />
    ),
    'Nuvens quebradas': (
      <Image
        src="/scatteredClouds.svg"
        width="47"
        height="30"
        alt="Wheater Icon"
      />
    ),
    'Chuva fraca': (
      <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />
    ),
    'Chuva forte': (
      <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />
    ),
    'Chuva moderada': (
      <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />
    ),
    'Tempestade com chuva': (
      <Image src="/storm.svg" width="47" height="30" alt="Wheater Icon" />
    ),
    'Tempestade com chuva forte': (
      <Image src="/storm.svg" width="47" height="30" alt="Wheater Icon" />
    ),
    default: (
      <Image src="/cloud.svg" width="47" height="30" alt="Wheater Icon" />
    )
  }
  return Images[condition] || Images.default
}

/*

  switch (props.conditions) {
    case 'Céu limpo':
      return <Image src="/sun.svg" width="47" height="30" alt="Wheater Icon" />

    case 'Poucas nuvens':
      return <Image src="/scatteredClouds.svg" width="47" height="30" alt="Wheater Icon" />

    case 'Nuvens dispersas':
      return <Image src="/scatteredClouds.svg" width="47" height="30" alt="Wheater Icon" />

    case 'Nuvens quebradas':
      return <Image src="/scatteredClouds.svg" width="47" height="30" alt="Wheater Icon" />

    case 'Chuva fraca':
      return <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />

    case 'Chuva forte':
      return <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />

    case 'Chuva moderada':
      return <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />

    case 'Tempestade com chuva':
      return <Image src="/storm.svg" width="47" height="30" alt="Wheater Icon" />

    case 'Tempestade com chuva forte':
      return <Image src="/storm.svg" width="47" height="30" alt="Wheater Icon" />

    default:
      return <Image src="/cloud.svg" width="47" height="30" alt="Wheater Icon" />
  }

*/
