import { ContainerDiv } from './styles'
export interface iContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: iContainerProps) => (
  <ContainerDiv>{children}</ContainerDiv>
)
