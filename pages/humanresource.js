import Layout from "../comps/LayoutProduct";
import { Typography, Grid } from "@mui/material";
import { menu } from "../comps/helpers";

export default function humanresource() {
  return (
    <Layout>
      <div style={{ marginTop: 100 }}>
        <Grid
          container
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              HUMAN RESOURCE PROVIDER
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: 50 }}>
            <Typography variant="body1">
              Focus on developing your company, leave the rest to us
            </Typography>
          </Grid>
          {menu({
            direction: "row",
            urlfoto: "/product/cleaningservice.jpeg",
            judul: "Cleaning Service",
            desc: "Pelayanan pengelolaan jasa tenaga kerja kebersihan secara sistematis dengan rancangan dan konsep perencanaan kualitas (Quality design) yang kami miliki dalam merawat property anda secara profesional. Metode tersebut kami sesuaikan dengan jenis gedung anda seperti office building, commercial building, hospital building, dll yang senantiasa kami kembangkan agar dapat memperoleh hasil yang optimal.",
          })}
          {menu({
            direction: "row-reverse",
            urlfoto: "/product/security.jpeg",
            judul: "Security",
            desc: "Salah satu bentuk dukungan PT. Dinar Cahaya Negara kepada bisnis anda adalah penjagaan keamanan (security). Para security profesional kami memastikan bahwa lingkungan kerja anda terjaga keamanannya baik bagi karyawan, tamu, dan tenant maupun aset perusahaan. Tenaga security kami memiliki sertifikat kompetensi gada pratama, sepervisor gada madya dan manager sertifikat gada utama dari kepolisian Republik Indonesia. Dengan kompetensi dan teamwork yang baik, security kami siap untuk menjaga keamanan di area lingkungan kerja anda.",
          })}
          {menu({
            direction: "row",
            urlfoto: "/product/driver.jpeg",
            judul: "Driver",
            desc: "Pengelolaan tenaga pengemudi dengan resiko tinggi sering menjadi masalah bagi perusahaan maupun perorangan, sehingga PT. Dinar Cahaya Negara menawarkan jasa tenaga kerja Driver (Pengemudi) untuk kebutuhan di perusahaan, rumah dan untuk kebutuhan lainnya. Dimanapun lokasi yang anda butuhkan kami siap membantu. Para driver kami didukung dengan driver berpengalaman dan terampil yang telah memiliki SIM A ataupun BI/BII.",
          })}
          {menu({
            direction: "row-reverse",
            urlfoto: "/product/personelsupport.jpeg",
            judul: "Personel Support",
            desc: "Personeel support adalah jasa pengelolaan dan penempatan tenaga kerja terampil perkantoran. Berbekal pengalaman bekerja sebagai tenaga profesional dari berbagai perusahaan diantaranya adalah di bidang perbankan dan jasa keuangan lainnya. Para manager kami sangat mengerti kebutuhan pelanggan akan tenaga kerja siap pakai dan memiliki integritas yang tinggi, baik dari sisi pengetahuan teknis dan kualitas layanan. Berbeda dengan tenaga kerja non skills, maka personeel support adalah jasa pengelolaan tenaga kerja skills dengan latar pendidikan akademis. Personeel support meliputi jenis pekerjaan :",
            items: [
              { product: "Staff Administrasi" },
              { product: "Legal Staff" },
              { product: "HRD Staff" },
              { product: "Leader Marketing" },
              { product: "Teller dan Resepsionist" },
              { product: "Customer Service" },
              { product: "Engineer" },
              { product: "Programmer" },
              { product: "Dan Lain-Lain" },
            ],
          })}
          {menu({
            direction: "row",
            urlfoto: "/product/officesupport.jpeg",
            judul: "Office Support",
            desc: "Office support adalah salah satu divisi produk kami yang membantu anda menangani kegiatan bisnis penunjang anda. Kami dapat dan mampu mengambil alih sebagian atau seluruh tuga-tugas ‘non core’ dengan tanpa menghilangkan kesan bahwa pekerja tetap memiliki loyalitas kepada perusahaan anda. Serahkan kegiatan bisnis penunjangn anda kepada kami, diantaranya adalah tugas-tugas :",
            items: [
              { product: "Tenaga kerja bongkar muat" },
              { product: "Customer Relation Assistant" },
              { product: "Telemarketing" },
              { product: "Pantry service" },
              { product: "Pengantar surat-menyurat (massanger)" },
              { product: "Petugas administrasi surat menyurat (mailing doc)" },
              { product: "Packer" },
              { product: "Collector" },
              { product: "SPG/SPB" },
              { product: "Dan Lain-Lain" },
            ],
          })}
          <Grid item>
            <Typography variant="body1">
              Kami berusaha dan mampu menyediakan tenaga kerja terdidik dan
              terampil untuk menjalankan service excellent anda. Didukung
              ketrampilan yang terus ditingkatkan dari waktu ke waktu, semua
              karyawan yang kami salurkan senantiasa kami persiapkan untuk dapat
              bekerja sigap, cepat dan tanggap.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
