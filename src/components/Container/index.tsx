import { ContainerDiv } from './styles'
export type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <ContainerDiv>{children}</ContainerDiv>
)
