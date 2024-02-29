import Button from '../../assets/RegisterButton'
import Description from './Description'
import Steps from './Steps'
import StepsTwo from './StepsTwo'
import Feedback from './Feedback'
import TryToRegister from './TryToRegister'

const Main = () => {
  return (
    <main>
      <div className="w-2/6	mb-96	ml-36	">
        <h1 className="text-6xl font-bold mb-10">
          Каршеринг в любой точке России
        </h1>
        <div className="w-3/6 mb-11">
          <p>Будьте всегда за рулём во время путешествий и командировок.</p>
        </div>
        <Button />
      </div>
      <Description />
      <Steps />
      <StepsTwo />
      <Feedback />
      <TryToRegister />
    </main>
  )
}

export default Main

// // <ContentContainer>
// {/* <block1 margin /> */}
// <block2 margin />
// <block3 bgColor padding />
// <block4 margin />
// </ContentContainer>

// put images in the assets
