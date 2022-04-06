import tw from "tailwind-styled-components";
const Ride = ({ id, imgUrl, service, multiplier, duration }) => {
  return (
    <Wrapper key={id}>
      <RideImg src={imgUrl} alt="uberX" />
      <RideInfo>
        <RideType>{service}</RideType>
        <RideDistance>5 min away</RideDistance>
      </RideInfo>
      <RidePrice>${(multiplier * duration).toFixed(2)}</RidePrice>
    </Wrapper>
  );
};

export default Ride;
const Wrapper = tw.div`flex items-center mx-3`;
const RideImg = tw.img`w-20 mr-3 `;
const RideInfo = tw.div``;
const RideType = tw.div`font-bold`;
const RideDistance = tw.div`text-blue-500 text-xs`;
const RidePrice = tw.div`flex-1 text-right text-sm`;
