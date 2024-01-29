import DaumPostcode from 'react-daum-postcode';

export default function Map() {
    const onCompletePost = data => {
        console.log(data)
    };
    return (
        <div>
            <DaumPostcode onComplete={onCompletePost} />
        </div>
    );
}