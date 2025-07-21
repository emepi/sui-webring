module webring::webring_proposal;


public struct WebringProposal has key, store {
    id: UID,
    site_id: ID
}


public fun new(site_id: ID, ctx: &mut TxContext): WebringProposal {
    WebringProposal {
        id: object::new(ctx),
        site_id,
    }
}

public fun remove(self: WebringProposal) {
    let WebringProposal {id, site_id: _} = self;

    object::delete(id);
}

public fun site_id(self: &WebringProposal): ID {
    self.site_id
}