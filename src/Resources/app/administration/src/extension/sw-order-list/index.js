import template from './sw-order-list.html.twig';
import './sw-order-list.scss';

Shopware.Component.override('sw-order-list', {
    template,

    computed: {
        orderCriteria() {
            const criteria = this.$super('orderCriteria');

            criteria.addAssociation('tags');

            return criteria;
        },
    },

    methods: {
        getOrderColumns() {
            const columns = this.$super('getOrderColumns');

            columns.push({
                property: 'tags',
                label: 'blueroger-order-tags.order.list.columnTags',
                allowResize: true,
                multiLine: true,
                sortable: false,
            });

            return columns;
        },
    },
});
