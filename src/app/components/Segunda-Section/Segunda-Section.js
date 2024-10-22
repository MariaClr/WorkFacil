import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import Card from '../Card/Card'

export default function SegundaSection(){
    return (<>
    <section>
        <h2>Principais Vagas</h2>
        <div>
            <ArrowLeftIcon class="size-6"/>
            <Card/>
            <Card/>
            <Card/>
            <ArrowRightIcon class='size-6'/>
        </div>
        <div>
            <a>Ver Mais</a>
        </div>
    </section>
    </>)
}