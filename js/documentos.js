const data = {
    registro: [
        {
            nombre: 'Solicitud de creación de cuenta',
            responsable: 'Desarrollador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
        {
            nombre: 'Formato - Solicitud de registro',
            responsable: 'Desarrollador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
    ],
    register: [
        {
            nombre: 'Account creation request',
            responsable: 'Developer',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
        {
            nombre: 'Format - Registration Application',
            responsable: 'Developer',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
    ],
    diseno: [
        {
            nombre: 'Documento de diseño',
            responsable: 'Desarrollador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
        {
            nombre: 'Solicitud de renovación de periodo de acreditación COLCX',
            responsable: 'Desarrollador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
    ],
    design: [
        {
            nombre: 'Design document',
            responsable: 'Developer',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
        {
            nombre: 'Application for renewal of accreditation period COLCX',
            responsable: 'Developer',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
    ],
    validacion: [
        {
            nombre: 'Declaración de no conflicto de intereses COLCX',
            responsable: 'OVV',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
        {
            nombre: 'Documento de reporte de validación',
            responsable: 'OVV',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
    ],
    validation: [
        {
            nombre: 'Declaration of no conflict of interest COLCX',
            responsable: 'OVV',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
        {
            nombre: 'Validation report document',
            responsable: 'OVV',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
    ],
    certificacion: [
        {
            nombre: 'Formato de solicitud de aclaraciones',
            responsable: 'Desarrollador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
        {
            nombre: 'Formato de solicitud de emisión Verificación COLCX',
            responsable: 'Certificador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
    ],
    certification: [
        {
            nombre: 'Clarification request form',
            responsable: 'Desarrollador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
        {
            nombre: 'COLCX Verification Request for Issuance Form',
            responsable: 'Certificador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
    ],
    comercializacion: [
        {
            nombre: 'Solicitud de retiro ColCER colcx',
            responsable: 'Desarrollador/Comercializador',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'es',
        },
    ],
    commercialization: [
        {
            nombre: 'Withdrawal request ColCER colcx',
            responsable: 'Developer/Marketer',
            version: 'V1.0',
            descargaes: './pdf/test.pdf',
            descargaen: './pdf/test.pdf',
            idioma: 'en',
        },
    ],
}

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.documentos-tabs__menu li')
    const contenidoDivEs = document.querySelector(
        '.documentos-tabs__espanol .documentos-tabs__contenido'
    )
    const contenidoDivEn = document.querySelector(
        '.documentos-tabs__ingles .documentos-tabs__contenido'
    )

    let firstTable = true

    const createTable = (section, tableData, contenidoDiv, idioma) => {
        const table = document.createElement('table')
        table.setAttribute(
            'id',
            `tabla${section.charAt(0).toUpperCase() + section.slice(1)}`
        )
        table.setAttribute(
            'class',
            'table table-hover table-bordered border-primary align-middle '
        )

        if (firstTable) {
            table.classList.add('active')
            firstTable = false
        }

        const thead = document.createElement('thead')
        thead.innerHTML =
            idioma === 'es'
                ? `
            <tr>
                <th>Nombre del documento</th>
                <th>Responsable</th>
                <th>Versión</th>
                <th>Descarga<br>Español</th>
                <th>Descarga<br>Inglés</th>
            </tr>
        `
                : `
            <tr>
                <th>Document name</th>
                <th>Responsible</th>
                <th>Version</th>
                <th>Download Es</th>
                <th>Download En</th>
            </tr>
        `
        table.appendChild(thead)

        const tbody = document.createElement('tbody')
        tableData.forEach((row) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${row.nombre}</td>
                <td>${row.responsable}</td>
                <td>${row.version}</td>
                <td><a href="${row.descargaes}" target="_blank"><img src="./images/Download.png"></a></a></td>
                <td><a href="${row.descargaen}" target="_blank"><img src="./images/Download.png"></a></td>
            `
            tbody.appendChild(tr)
        })

        table.appendChild(tbody)
        contenidoDiv.appendChild(table)
    }

    menuItems.forEach((menuItem) => {
        const section = menuItem.id
        if (contenidoDivEs) {
            const tableDataEs =
                data[section]?.filter((row) => row.idioma === 'es') || []
            if (tableDataEs.length > 0) {
                createTable(section, tableDataEs, contenidoDivEs, 'es')
            }
        }
        if (contenidoDivEn) {
            const tableDataEn =
                data[section]?.filter((row) => row.idioma === 'en') || []
            if (tableDataEn.length > 0) {
                createTable(section, tableDataEn, contenidoDivEn, 'en')
            }
        }
    })

    const tablas = document.querySelectorAll(
        '.documentos-tabs__contenido .table'
    )

    const activateTab = (index) => {
        menuItems.forEach((item) => {
            item.classList.remove('active')
        })

        tablas.forEach((item) => {
            item.classList.remove('active')
        })

        menuItems[index].classList.add('active')
        tablas[index].classList.add('active')
    }

    if (tablas.length > 0) {
        menuItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                activateTab(index)
            })
        })
    }
})
