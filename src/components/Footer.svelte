<script lang="ts">
  import IconLink from "./IconLink.svelte";

    interface FooterLink {
        heading: string
        links: Link[]
    }

    interface Link {
        label?: string
        link: string
        newTab: boolean
        iconPath?: string
    }

    let footerLinks: FooterLink[] = [
        {
            heading: "Tentang Kami",
            links: [
                {
                    label: "Tentang Seenaoo",
                    link: "#",
                    newTab: false
                },
                {
                    label: "Karir",
                    link: "#",
                    newTab: false
                    
                },
                {
                    label: "Pasang iklan dengan kami",
                    link: "#",
                    newTab: false

                },
                {
                    label: "Berita",
                    link: "#",
                    newTab: false
                },
            ]
        },
        {
            heading: "Untuk Murid",
            links: [
                {
                    label: "Flashcard Seenaoo",
                    link: "#",
                    newTab: false
                },
                {
                    label: "Pelajari",
                    link: "#",
                    newTab: false
                },
                {
                    label: "Solusi",
                    link: "#",
                    newTab: false
                }
            ]
        },
        {
            heading: "Untuk Pengajar",
            links: [
                {
                    label: "Evaluasi",
                    link: "#",
                    newTab: false
                },
                {
                    label: "Blog",
                    link: "#",
                    newTab: false
                },
                {
                    label: "Live",
                    link: "#",
                    newTab: false
                }
            ]
        },
        {
            heading: "Sumber Daya",
            links: [
                {
                    label: "Pusat bantuan",
                    link: "#",
                    newTab: false

                },
                {
                    label: "Daftar",
                    link: "#",
                    newTab: false
                },
                {
                    label: "Kode Etik",
                    link: "#",
                    newTab: false
                },
                {
                    label: "Pedoman Komunitas",
                    link: "#",
                    newTab: false
                },
                {
                    label: "Peryaratan",
                    link: "#",
                    newTab: false
                }
            ]
        }
    ]

    let iconLinks: Link[] = [
        {
            link: "https://www.facebook.com",
            newTab: false,
            iconPath: "bi:facebook",
        },
        {
            link: "https://www.twitter.com",
            newTab: true,
            iconPath: "bi:twitter",
        },
        {
            link: "https://www.youtube.com",
            newTab: true,
            iconPath: 'bi:youtube',
        },
        {
            link: "https://www.instagram.com",
            newTab: true,
            iconPath: "bi:instagram",
        }
    ]
</script>

<footer class="px-6 py-16 bg-slate-100 md:px-12">
    <div class="flex flex-wrap text-sm md:text-base">
        {#each footerLinks as footerlink}
            <div class="flex flex-col mr-10 mb-8 md:mr-16">
                <h1 class="font-bold text-base mb-5">{footerlink.heading}</h1>
                {#each footerlink.links as link, index}
                    {#if index == footerlink.links.length-1}
                        <a class="" href={link.link}>{link.label}</a>
                    {:else}
                        <a class="mb-2" href={link.link}>{link.label}</a>
                    {/if}
                {/each}
            </div>
        {/each}
        <div class="flex flex-col mr-10 md:mr-20 mb-8">
            <h1 class="font-bold text-base mb-5">Bahasa</h1>
            <select class="select select-bordered text-sm">
                <option disabled selected>Pilih Bahasa</option>
                <option>Bahasa Indonesia</option>
                <option>Inggris</option>
            </select>
        </div>
    </div>
    <div class="mt-12">
        <div class="flex justify-between px-12 md:justify-evenly md:px-28 lg:px-60">
            {#each iconLinks as iconLink}
                <IconLink {...iconLink} height={"100"} width={"100"}/>
            {/each}
        </div>
        <div class="text-center font-bold text-sm mt-4 md:text-base md:mt-6">
            <p>&copy; 2023 Seenaoo, Inc.</p>
        </div>
    </div>
</footer>