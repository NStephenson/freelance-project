"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Proposal = (function () {
    function Proposal(id, customer, portfolio_url, tools, estimated_hours, weeks_to_complete, hourly_rate, client_email) {
        if (portfolio_url === void 0) { portfolio_url = 'https://'; }
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.weeks_to_complete = weeks_to_complete;
        this.hourly_rate = hourly_rate;
        this.client_email = client_email;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.js.map