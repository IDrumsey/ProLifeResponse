import ArgumentCard from '../components/argument-card'



export default function ArgumentsPage() {


    return (
        <div style={{display: 'flex', flexDirection: 'column', rowGap: '25px'}}>
            <ArgumentCard
            bgColor="#a82553"
            fontColor="#fff"
            position='left'
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est tenetur maiores quos sit perferendis natus fuga ipsam ea consequatur animi at architecto numquam nesciunt necessitatibus vero, corporis modi, iusto velit ullam consectetur alias. Velit assumenda odit molestiae quibusdam tenetur suscipit? Animi, velit quisquam laborum veniam exercitationem officiis earum?"
            ></ArgumentCard>

            <ArgumentCard
            bgColor="#13356e"
            fontColor="#fff"
            position='right'
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est tenetur maiores quos sit perferendis natus fuga ipsam ea consequatur animi at architecto numquam nesciunt necessitatibus vero, corporis modi, iusto velit ullam consectetur alias."
            ></ArgumentCard>
        </div>
    )
}