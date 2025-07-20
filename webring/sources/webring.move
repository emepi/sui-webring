module webring::webring;

use sui::types;


const EDuplicateSite: u64 = 0;
const ENotOneTimeWitness: u64 = 1;
const ESiteDoesNotExist: u64 = 2;


public struct Webring has key {
    id: UID,
    site_ids: vector<ID>
}

public struct WebringCap has key {
    id: UID
}

public struct WEBRING has drop {}


fun init(otw: WEBRING, ctx: &mut TxContext) {
    assert!(types::is_one_time_witness(&otw), ENotOneTimeWitness);

    let webring = Webring {
        id: object::new(ctx),
        site_ids: vector[]
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