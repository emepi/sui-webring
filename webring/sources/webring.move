module webring::webring;

use sui::types;


const EDuplicateSite: u64 = 0;
const ENotOneTimeWitness: u64 = 1;
const ESiteDoesNotExist: u64 = 2;


public struct Webring has key {
    id: UID,
    owner: address,
    site_ids: vector<ID>,
    proposals: vector<ID>,
}

public struct WebringCap has key {
    id: UID
}

public struct WEBRING has drop {}


fun init(otw: WEBRING, ctx: &mut TxContext) {
    assert!(types::is_one_time_witness(&otw), ENotOneTimeWitness);

    let webring = Webring {
        id: object::new(ctx),
        owner: ctx.sender(),
        site_ids: vector[],
        proposals: vector[],
    };

    transfer::share_object(webring);

    transfer::transfer(
        WebringCap { id: object::new(ctx) },
        ctx.sender()
    );
}

public fun register_site(self: &mut Webring, _webring_cap: &WebringCap, site_id: ID) {
    assert!(!self.site_ids.contains(&site_id), EDuplicateSite);
    self.site_ids.push_back(site_id);
}

public fun remove_site(self: &mut Webring, _webring_cap: &WebringCap, site_id: ID) {
    let (site_exists, i) = self.site_ids.index_of(&site_id);
    assert!(site_exists, ESiteDoesNotExist);

    self.site_ids.remove(i);
}

public fun handle_proposal(
    self: &mut Webring, 
    _webring_cap: &WebringCap,
    site_id: ID,
    accept: bool
) {
    let (site_exists, i) = self.proposals.index_of(&site_id);
    assert!(site_exists, ESiteDoesNotExist);

    let site = self.proposals.remove(i);

    if (accept) {
        self.site_ids.push_back(site);
    };
}

public fun register_proposal(self: &mut Webring, site_id: ID) {
    assert!(!self.proposals.contains(&site_id), EDuplicateSite);
    self.proposals.push_back(site_id);
}