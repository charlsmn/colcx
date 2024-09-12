;(function ($) {
    setTimeout(() => {
        $('.aliados-carousel').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 2,
                },
                780: {
                    items: 3,
                },
                1000: {
                    items: 3,
                },
            },
        })

        $('.confi-carousel').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 2,
                },
                780: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        })

        $('.certificados-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                780: {
                    items: 2,
                },
                1000: {
                    items: 3,
                    margin: 100,
                    loop: false,
                },
            },
        })

        $('.carousel-contacto').owlCarousel({
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                },
                780: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        })

        $('.comunicados-carousel').owlCarousel({
            loop: false,
            autoplay: true,
            margin: 20,
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                },
                780: {
                    items: 2,
                },
            },
        })

        $('.card-document-carousel').owlCarousel({
            loop: false,
            autoplay: true,
            nav: true,
            dots: true,
            responsive: {
                0: { items: 1 },
                780: { items: 2, margin: 20 },
                1000: { items: 3, margin: 20 },
            },
        })
    }, 500)
})(jQuery)

const scrollMenu = () => {
    const menu = document.querySelector('.site-header')

    menu.classList.toggle('scrolled', window.scrollY > 0)
}

window.addEventListener('scroll', scrollMenu)

const toggleMenu = () => {
    const burger = document.querySelector('.burger')
    const menuMovil = document.querySelector('.header-movil__menu')

    menuMovil.classList.toggle('active')
    burger.classList.toggle('active')
}

document.querySelector('.burger').addEventListener('click', toggleMenu)

const submenuMovil = () => {
    const hasSubMenu = document.querySelectorAll('.has-submenu')

    hasSubMenu.forEach((item) => {
        const subMenuIcon = item.querySelector('svg')

        subMenuIcon.addEventListener('click', () => {
            subMenuIcon.classList.toggle('active')

            const subMenu = item.querySelector('.has-submenu ul')
            subMenu.classList.toggle('active')
        })
    })
}

submenuMovil()

const pqrAnonima = () => {
    const checkbox = document.getElementById('anonima')
    const div = document.querySelector('.anonima-nombre')

    if (checkbox && div) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                div.style = 'display: none'
            } else {
                div.style = 'display: block'
            }
        })
    }
}

pqrAnonima()

const formTabs = () => {
    const menuFormTabs = document.querySelectorAll('.form-menu li')
    const formContainers = document.querySelectorAll('.form-content > div')

    const activateTab = (index) => {
        menuFormTabs.forEach((item) => {
            item.classList.remove('active')
        })

        formContainers.forEach((item) => {
            item.classList.remove('active')
        })

        menuFormTabs[index].classList.add('active')
        formContainers[index].classList.add('active')
    }

    const urlParams = new URLSearchParams(window.location.search)
    const tabParam = urlParams.get('tab')

    if (tabParam) {
        activateTab(1)
    }

    menuFormTabs.forEach((item, index) => {
        item.addEventListener('click', () => {
            activateTab(index)
        })
    })
}

formTabs()

const adjuntarDocumento = () => {
    const adjuntarInput = document.querySelector('.adjuntar-doc input')
    const fileName = document.querySelector('.adjuntar-doc span')

    if (adjuntarInput) {
        adjuntarInput.addEventListener('change', () => {
            fileName.textContent = adjuntarInput.files[0].name
        })
    }
}

adjuntarDocumento()

const documentHorizontalScroll = () => {
    const tableResponsive = document.querySelector('.table-responsive')
    const fatherTable = document.querySelector('.documentos-tabs > div')

    if (tableResponsive && fatherTable) {
        tableResponsive.addEventListener('scroll', () => {
            const isAtEnd =
                Math.abs(
                    tableResponsive.scrollWidth -
                        tableResponsive.scrollLeft -
                        tableResponsive.clientWidth
                ) < 1 // margen de error

            if (isAtEnd) {
                fatherTable.classList.add('remove-arrow')
            } else {
                fatherTable.classList.remove('remove-arrow')
            }
        })
    }
}

documentHorizontalScroll()

const popupDocumentos = () => {
    const btnPopupDocumentos = document.getElementById('btnPopupDocumentos')
    const popup = document.querySelector('.popupDocumentos')
    const closePopup = document.getElementById('close-popup-documentos')

    if (btnPopupDocumentos && popup) {
        btnPopupDocumentos.addEventListener('click', () => {
            popup.classList.add('active')
        })

        closePopup.addEventListener('click', () => {
            popup.classList.remove('active')
        })
    }
}

popupDocumentos()

const popupConsultasActivas = () => {
    const btnPopupConsultasActivas = document.querySelectorAll(
        '.participar-consultas-activas'
    )
    const body = document.querySelector('body')
    const popup = document.getElementById('popup-consultas-activas')

    if (popup && btnPopupConsultasActivas) {
        const closePopup = popup.querySelector('.general-popup__close')

        btnPopupConsultasActivas.forEach((item) => {
            item.addEventListener('click', () => {
                popup.classList.add('active')
                body.style.overflow = 'hidden'
            })
        })

        closePopup.addEventListener('click', () => {
            popup.classList.remove('active')
            body.style.overflow = 'auto'
        })
    }
}

popupConsultasActivas()

function ciclos() {
    const ciclos = document.querySelectorAll('.ciclo-item')
    const continuaProceso = document.querySelector('.continua-proceso')

    ciclos.forEach((ciclo) => {
        ciclos[0].classList.add('active')

        ciclo.addEventListener('click', () => {
            ciclos.forEach((item) => item.classList.remove('active'))

            // Agregar la clase 'active' solo al ciclo clicado
            ciclo.classList.add('active')
        })
    })

    if (continuaProceso) {
        continuaProceso.addEventListener('click', () => {
            // Forzar redibujado
            setTimeout(() => {
                ciclos.forEach((item) => item.classList.remove('active'))
                if (ciclos[2]) {
                    ciclos[2].classList.add('active')
                }
            }, 50) // Pequeño retraso para forzar la actualización del DOM
        })
    }
}

ciclos()
