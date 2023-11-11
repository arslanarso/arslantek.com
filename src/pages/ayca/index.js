import Image from "next/image";
import Link from "next/link";

const linkPath = "/about";

export default function Homepage() {
  return (
    <section id="homepage" className="p-6">
      {
        <article className="my-16 xl:flex justify-between items-center">
          <section className="max-w-3xl">
            <h1 className="h2 md:h1 pb-4">Selam,Sevgilim</h1>
            <p className="paragraph">
              Gördüğünde nasıl bir tepki vereceksin gerçekten de çok merak
              ediyorum aslında ama bunu okurken ben yanında olmayacağım o yüzden
              okuduktan hemen sonra beni arayacaksın
            </p>
            <p className="paragraph pt-4">
              Biliyorum çok olmadı tanışalı ama şu yandaki fotografımıza her
              baktığımda sanki birbirimizi çoooook uzun zamandır tanıyormuşta
              çoooook uzun zamandır berabermişiz gibi hissediyorum sence de çok
              güzel değil miyiz????
            </p>
            <p className="paragraph pt-4">
              Buraya kötü hiçbir şey yazmak istemiyorum Ayça, burada yazan her
              şey tıpkı bizim ilişkimiz gibi güzel olmalı sevgilim. Sadece
              birbirimizi biraz daha anlamalıyız,dinlemeliyiz sen bugün
              hastaneden çıktığında seni kapının önünde bekliyor olacağım. Bu
              ilişki bu şekilde bitmeyi hak etmiyor çünkü en azından
              birbirimizin gözlerine bakıp konuşmalı anlaşabiliyorsak anlaşmalı
              anlaşamıyorsakta yüz yüze konuşup bitirmeliyiz
            </p>
            <p className="paragraph pt-4">
              (Son bir şey sayfayı en aşağı kaydır onun üstüne basabilirsin çok
              güzel bir şey oluyor 😁)
            </p>
          </section>

          <Image
            src="/aycaArslan.png"
            width={540}
            height={360}
            className="rounded-lg lg:w-[540px] lg:h-[360px] xl:w-[432px] xl:h-[450px] 2xl:w-[540px] 2xl:h-[360px] pt-4 xl:pt-0"
          />
        </article>
      }
    </section>
  );
}
